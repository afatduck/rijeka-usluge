import { showHintPopup } from "~/factory/createHint";
import AssetService from "./assetService";
import { showServiceInfo } from "~/factory/createServiceInfo";

const ICON_SIZE = 48

class MapService {
    private static map: google.maps.Map | null = null;
    private static clouds: {[key: number]: google.maps.marker.AdvancedMarkerElement} = []

    public static getMap(): google.maps.Map {
        if (this.map) return this.map;
        throw new MapServiceError("Map not insentiated.")
    }

    public static initializeMaps (app: HTMLDivElement): Promise<void> {
    return new Promise((resolve, reject) => {

        //@ts-ignore
        const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

        if (!GOOGLE_MAPS_API_KEY) {
            console.warn("⚠️ Google Maps API key is missing! Check your .env file.");
            reject()
        }

        if (!app) reject()
        if (GOOGLE_MAPS_API_KEY) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places,geometry,marker&callback=initMap&loading=async&map_ids="69072eaa5ab3f95ee72efa2e"`;
            script.async = true;
            document.head.appendChild(script);
        }

        const mapContainer = document.createElement("div");
        mapContainer.id = "map";
        app.appendChild(mapContainer);

        //@ts-ignore
        window.initMap = () => {
            const map = new google.maps.Map(document.getElementById("map")!, {
                center: { lat: 45.328206, lng: 14.447200 },
                zoom: 19,
                mapId: "69072eaa5ab3f95ee72efa2e",
                disableDefaultUI: true,
                keyboardShortcuts: false
            });
            this.map = map
            resolve()
        };
    })}

    static createCloud(treasure: Treasure): boolean {
        if (!this.map) return false;
        if (!this.clouds[treasure.id]) {
            const asset = AssetService.getAsset("QUESTION_MARK").cloneNode() as HTMLImageElement
            asset.width = ICON_SIZE;
            asset.height = ICON_SIZE;
            
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: treasure.location,
                content: asset,
                map: this.map,
                gmpClickable: true
            });

            marker.addEventListener('click', () => showHintPopup({treasure}))
            marker.style.cursor = 'poiner'

            this.clouds[treasure.id] = marker
            return true
        }
        return false
    }

    static removeCloud(treasure: Treasure) {
        const cloud = this.clouds[treasure.id]
        
        if (cloud) {
            cloud.map = null;
        }
    }

    static createBadge(treasure: Treasure) {
        if (!this.map) return;
        const asset = AssetService.getAsset(treasure.badge).cloneNode() as HTMLImageElement
        asset.width = ICON_SIZE
        asset.height = ICON_SIZE
        asset.classList.add("marker")

        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: treasure.location,
            content: asset,
            map: this.map,
            gmpClickable: true
        });

        marker.addEventListener("click", () =>  showServiceInfo({treasure}))
    }
}

class MapServiceError extends Error {}

export default MapService