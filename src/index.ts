
import { showWelcomeMessage } from "./factory/welcome";
import LocationService from "./serivce/locationService";
import MapService from "./serivce/mapService";
import "./styles/main.css";

window.onload = () => {

    const app = document.getElementById('app') as HTMLDivElement;

    showWelcomeMessage()

    MapService.initializeMaps(app).then(() => {
        LocationService.start()
    });


}