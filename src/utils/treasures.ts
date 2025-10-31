import { treasures } from "~/data/treasure"

export const getUnlocked = (state: TreasureSaveData): Treasure[] => {
    return treasures.filter(t => state[t.id] == "UNLOCKED")
}

export const getLocked = (state: TreasureSaveData): Treasure[] => {
    return treasures.filter(t => state[t.id] == "LOCKED")
}

export const isLastTreasure = (treasure: Treasure) => {
    return treasure.id === Math.max(...treasures.filter(t => t.category = treasure.category).map(t => t.id))
}

export const isAbsoluteLast = (state: TreasureSaveData): boolean => {
    return treasures.length == Object.values(state).filter(v => v == "UNLOCKED").length + 1
}

export const categoryLocal = (category: Category) => {
    switch (category) {
        case "START": return "Početna lokacija"
        case "EDUCATION": return "Edukacija"
        case "FUN": return "Zabava"
        case "HOUSING": return "Smještaj"
    }
}