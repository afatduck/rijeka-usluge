import { createPopup } from "~/components/popup";
import AssetService from "~/serivce/assetService";
import { categoryLocal } from "~/utils/treasures";

const BADGE_SIZE = 48

const buildSeriveInfo: Factory<TreasureFactoryProps> = ({root, close, treasure}) => {
    const h2 = document.createElement('h2');
    h2.textContent = treasure.title
    root.append(h2);

    const category = document.createElement('p')
    const categoryI = document.createElement('i')
    const categoryB = document.createElement('b')

    categoryI.textContent = "Kategorija: "
    categoryB.textContent = categoryLocal(treasure.category)

    category.append(categoryI)
    category.append(categoryB)
    root.append(category)

    const p = document.createElement('p')
    p.textContent = treasure.description
    root.append(p)

    const image = AssetService.getAsset(treasure.badge)
    image.width = BADGE_SIZE
    image.height = BADGE_SIZE

    root.append(image)

    const button = document.createElement('button')
    button.innerHTML = "Posjeti stranicu"
    const buttonAnchor = document.createElement('a')
    buttonAnchor.append(button)
    buttonAnchor.style.display = 'block'
    root.append(buttonAnchor)
    buttonAnchor.href = treasure.url
    buttonAnchor.target = '_blank'
}

export const showServiceInfo = ({treasure}: TreasureFactoryProps) => {
    createPopup(props => buildSeriveInfo({...props, treasure}), false, true)
} 

