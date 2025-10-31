export const allAssets: Asset[] = [
    "QUESTION_MARK",
    "TEST",
    "SOKOL",
    "BESPLATNI",
    "DOMMLADIH",
    "EDUKATIVNI",
    "FESTIVALNI",
    "KARJERNI",
    "KNJIZNICA",
    "KULTURNI",
    "PORTAL",
    "SAVJET",
    "START",
    "STANBENI",
    "SUFINANCIRANI",
    "ZASTITA"
]

export const assetURL = (asset: Asset): string => {
    switch (asset) {
        case "QUESTION_MARK":
            return "./assets/icon/questionmark.svg"
        case "TEST":
            return "./assets/icon/test.jpeg"
        case "SOKOL":
            return "./assets/icon/sokol.png"
        case "BESPLATNI":
            return "./assets/icon/besplatni.png"
        case "DOMMLADIH":
            return "./assets/icon/dommladih.png"
        case "EDUKATIVNI":
            return "./assets/icon/edukativni.png"
        case "FESTIVALNI":
            return "./assets/icon/festivalni.png"
        case "KARJERNI":
            return "./assets/icon/karjerni.png"
        case "KNJIZNICA":
            return "./assets/icon/knjiznica.png"
        case "KULTURNI":
            return "./assets/icon/kulturni.png"
        case "PORTAL":
            return "./assets/icon/portal.png"
        case "SAVJET":
            return "./assets/icon/savjet.png"
        case "START":
            return "./assets/icon/start.png"
        case "STANBENI":
            return "./assets/icon/stanbeni.png"
        case "SUFINANCIRANI":
            return "./assets/icon/sufinancirani.png"
        case "ZASTITA":
            return "./assets/icon/zastita.png"
    }
}