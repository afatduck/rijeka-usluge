import { createPopup } from "~/components/popup";
import AssetService from "~/serivce/assetService";
import { categoryColor, categoryLocal } from "~/utils/treasures";

import "~/styles/serviceInfo.css"

const BADGE_SIZE = 48

const buildSeriveInfo: Factory<TreasureFactoryProps> = ({root, close, treasure}) => {
    const h2 = document.createElement('h2');
    const h2span = document.createElement('h2')
    h2span.textContent = treasure.title
    root.append(h2);

    const image = AssetService.getAsset(treasure.badge)
    image.width = BADGE_SIZE
    image.height = BADGE_SIZE

    h2.append(image)
    h2.append(h2span)

    const category = document.createElement('p')
    const categoryI = document.createElement('span')
    const categoryB = document.createElement('b')

    categoryI.textContent = "Kategorija: "
    categoryB.textContent = categoryLocal(treasure.category)
    categoryB.style.color = categoryColor(treasure.category)

    category.append(categoryI)
    category.append(categoryB)
    root.append(category)

    treasure.description.split('\n\n').forEach(d =>{
        const p = document.createElement('p')
        p.textContent = d
        root.append(p)
    })

    const button = document.createElement('button')
    button.innerHTML = "Posjeti stranicu"
    const buttonAnchor = document.createElement('a')
    buttonAnchor.append(button)
    buttonAnchor.style.display = 'block'
    root.append(buttonAnchor)
    buttonAnchor.href = treasure.url
    buttonAnchor.target = '_blank'
    button.style.setProperty('--col', categoryColor(treasure.category))

    root.classList.add("service-info")
}

export const showServiceInfo = ({treasure}: TreasureFactoryProps) => {
    createPopup(props => buildSeriveInfo({...props, treasure}), false, true)
} 

