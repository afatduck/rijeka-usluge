class MapService {
    private static map: google.maps.Map | null = null;

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
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places,marker&callback=initMap&loading=async&map_ids="69072eaa5ab3f95ee72efa2e"`;
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
                disableDefaultUI: true
            });
            this.map = map
            resolve()
        };
    })}
}

class MapServiceError extends Error {}

export default MapService