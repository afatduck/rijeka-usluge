interface FactoryProps {
    root: HTMLDivElement,
    close?: () => void 
}

type Factory = (props: FactoryProps) => void

type CancelationToken = string

enum Category {
    START,
    EDUCATION,
    FUN,
    HOUSING
}

interface Treasure {
    id: number
    title: string
    description: string
    url: string
    hint: string
    next: int[]
    location: google.maps.LatLngLiteral
    category: Category
}

interface TreasureSaveData {
    [key: Caregoy]: number
}