
import { treasures } from "./data/treasure";
import { showWelcomeMessage } from "./factory/welcome";
import AssetService from "./serivce/assetService";
import LocationService from "./serivce/locationService";
import MapService from "./serivce/mapService";
import TreasureService from "./serivce/treasureService";
import "./styles/main.css";

window.onload = () => {

    const app = document.getElementById('app') as HTMLDivElement;

    showWelcomeMessage()
    AssetService.loadAssets()

    MapService.initializeMaps(app).then(() => {
        LocationService.start()
        TreasureService.load()
    });


}