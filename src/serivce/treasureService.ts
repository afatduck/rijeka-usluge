import { getLocked, getUnlocked, isAbsoluteLast } from "~/utils/treasures";
import MapService from "./mapService";
import LocationService from "./locationService";
import { notifyStart } from "~/factory/notifyStart";
import { showNotifyFind } from "~/factory/notifyFind";

const TREASURE_LS_KEY = "TREASURE_STATE"
const startState: TreasureSaveData = {
    1: "LOCKED" 
}

class TreasureService {

    private static status: TreasureSaveData = startState; 

    public static load() {
        const saved = localStorage.getItem(TREASURE_LS_KEY)
        this.status = saved ? JSON.parse(saved) as TreasureSaveData : startState

        this.populateMap()        
    }

    private static populateMap() {
        const locked = getLocked(this.status)
        const unlocked = getUnlocked(this.status)

        locked.forEach(t => {
            if (MapService.createCloud(t)) LocationService.addRangeCallback({
                fn: () => this.onUnlock(t),
                target: t.location
            })
        })

        unlocked.forEach(t => {
            MapService.createBadge(t)
        })
    }

    private static onUnlock(treasure: Treasure) {
        this.status[treasure.id] = treasure.category === "START" ? "HIDDEN" : "UNLOCKED"

        if (treasure.category === "START") {
            notifyStart()
        } else {
            showNotifyFind({treasure, absolueLast: isAbsoluteLast(this.status)})
        }

        MapService.removeCloud(treasure)
        treasure.next.forEach(id => {
            this.status[id] = "LOCKED"
        })
        this.populateMap()
        this.saveState()
    }

    private static saveState() {
        localStorage.setItem(TREASURE_LS_KEY, JSON.stringify(this.status))
    } 

}

export default TreasureService