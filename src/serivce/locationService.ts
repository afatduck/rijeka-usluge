import { LOCATION_REQUEST_POPUP_ID, showLocationRequest } from "~/factory/locationRequest";
import EventService from "./eventService";
import MapService from "./mapService";
import { coordsToLatLng, isWithinBounds } from "~/utils/coords";
import AssetService from "./assetService";

const DETECTION_RADIUS = 25;
const DEFAULT_LOCATION = { lat: 45.328206, lng: 14.447200 };
const MOVE_SPEED = 1.5e-4
const PLAYER_SIZE = 40

class LocationService {

    private static locationRequestPopupCancelationToken: CancelationToken | null = null
    private static location: google.maps.LatLngLiteral = DEFAULT_LOCATION
    private static firstUpdate: boolean = true
    private static marker: google.maps.marker.AdvancedMarkerElement | null = null;
    private static rangeCallbacks: RangeCallback[] = []
    private static watchId: ReturnType<typeof navigator.geolocation.watchPosition> | null = null
    private static escapeCount: number = 0;

    private static countEscapes = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            this.escapeCount++;
            if (this.escapeCount === 3) {
                this.switchToKeyboad()
                document.removeEventListener('keydown', this.countEscapes)
            }
        }
        else {
            this.escapeCount = 0;
        }
    }

    private static switchToKeyboad() {
        if (this.watchId) {
            navigator.geolocation.clearWatch(this.watchId)
        }
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case "ArrowUp": {
                    this.location.lat += MOVE_SPEED
                    break
                }
                case "ArrowDown": {
                    this.location.lat -= MOVE_SPEED
                    break
                }
                case "ArrowLeft": {
                    this.location.lng -= MOVE_SPEED
                    this.marker?.classList.add('flip')
                    break
                }
                case "ArrowRight": {
                    this.location.lng += MOVE_SPEED
                    this.marker?.classList.remove('flip')
                    break
                }
                default: return
            }
            e.stopPropagation()
            this.onLocationChange()
        })
    }

    private static async checkNavigatorPermission() {
        if (!navigator.permissions) {
            this.permissionDenied()
        }

        const status = await navigator.permissions.query({ name: "geolocation" });

        if (status.state == 'granted') {
            this.permissionGranted()
        } else {
            this.permissionDenied()
        }

        status.onchange = () => {
            if (status.state == 'granted') {
                this.permissionGranted()
            } else {
                this.permissionDenied()
            }
        };
    }

    private static permissionGranted() {
        if (this.locationRequestPopupCancelationToken) {
            EventService.cancel(this.locationRequestPopupCancelationToken)
            this.locationRequestPopupCancelationToken = null;
            // Nije bas idealno rjesenje al malo sam se zapetljo 😅
            document.getElementById(LOCATION_REQUEST_POPUP_ID)?.remove()    
        }
    }

    private static permissionDenied() {
        if (!this.locationRequestPopupCancelationToken) {
            this.locationRequestPopupCancelationToken = EventService.onWelcomeScreenClosed(showLocationRequest);
        }
    }

    public static start() {
        this.checkNavigatorPermission()
        this.watchId = navigator.geolocation.watchPosition(
            pos => {                
                this.onLocationChange(pos.coords)
            },
            _ => {},
            { enableHighAccuracy: true }
        );

        document.body.addEventListener('keydown', this.countEscapes)            
    }

    private static onLocationChange(coords?: GeolocationCoordinates) {

        if (coords) this.location = coordsToLatLng(coords)

        const map = MapService.getMap()
        if (map) {
            if (this.firstUpdate) {
                this.firstUpdate = false;
                map.setCenter(this.location)
                const sokol = AssetService.getAsset('SOKOL').cloneNode() as HTMLImageElement
                sokol.width = PLAYER_SIZE
                sokol.height = PLAYER_SIZE
                sokol.classList.add("marker")
                sokol.classList.add('player')
                this.marker = new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: this.location,
                    title: 'ti',
                    content: sokol
                })
            } else if (this.marker) {
                this.marker!.position = this.location
            }
        }

        this.checkRangeCallbacks()
    }

    private static checkRangeCallbacks() {
        this.rangeCallbacks.forEach(({fn, target}, i) => {
            if (isWithinBounds(this.location!, target, DETECTION_RADIUS)) {
                fn()
                this.rangeCallbacks.splice(i, 1);
            }
        })
    }

    public static addRangeCallback(cb: RangeCallback) {
        this.rangeCallbacks.push(cb)
    }

}

export default LocationService

interface RangeCallback {
    fn: () => void,
    target: google.maps.LatLngLiteral
}