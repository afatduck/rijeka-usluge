import { LOCATION_REQUEST_POPUP_ID, showLocationRequest } from "~/factory/locationRequest";
import EventService from "./eventService";
import MapService from "./mapService";
import { coordsToLatLng } from "~/utils/coords";

class LocationService {

    private static locationRequestPopupCancelationToken: CancelationToken | null = null
    private static location: google.maps.LatLngLiteral | null = null
    private static firstUpdate: boolean = true
    private static marker: google.maps.marker.AdvancedMarkerElement | null = null;

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
        navigator.geolocation.watchPosition(
            pos => {                
                this.onLocationChange(pos.coords)
            },
            _ => {},
            { enableHighAccuracy: true }
        );
    }

    private static onLocationChange(coords: GeolocationCoordinates) {

        this.location = coordsToLatLng(coords)

        const map = MapService.getMap()
        if (map) {
            if (this.firstUpdate) {
                this.firstUpdate = false;
                map.setCenter(this.location)
                this.marker = new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: this.location,
                    title: 'you'
                })
            } else if (this.marker) {
                this.marker!.position = this.location
            }
        }
    }

}

export default LocationService