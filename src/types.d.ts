interface FactoryProps {
    root: HTMLDivElement,
    close?: () => void 
}

type Factory<T = {}> = (props: FactoryProps & T) => void

interface TreasureFactoryProps {
    treasure: Treasure
}

type CancelationToken = string

type Category = "START" | "KULTURA" | "KARIJERA" | "PODRSKA"

type Asset = "QUESTION_MARK" | 
"TEST" | 
"SOKOL" |
"BESPLATNI" |
"DOMMLADIH" |
"EDUKATIVNI" |
"FESTIVALNI" |
"KARJERNI" |
"KNJIZNICA" |
"KULTURNI" |
"PORTAL" |
"SAVJET" |
"STANBENI" |
"START" |
"SUFINANCIRANI" |
"ZASTITA";

interface Treasure {
    id: number
    title: string
    description: string
    url: string
    hint: string
    next: int[]
    location: google.maps.LatLngLiteral
    category: Category,
    badge: Asset
}

type TreasureState = 
    "HIDDEN" |
    "LOCKED" |
    "UNLOCKED"

interface TreasureSaveData {
    [key: number]: TreasureState
}