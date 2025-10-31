import { allAssets, assetURL } from "~/data/assets"

class AssetService {
    private static loaded: boolean = false
    // @ts-ignore
    private static loadedAssets: {[A in Asset]: HTMLImageElement} = {}
    
    public static loadAssets() {
        if (!this.loaded) {
            this.loaded = true
            allAssets.forEach(name => {
                const url = assetURL(name)
                const image = new Image()
                image.src = url
                this.loadedAssets[name] = image
            })
        }
    }

    public static getAsset(asset: Asset) {
        return this.loadedAssets[asset]
    }

}

export default AssetService