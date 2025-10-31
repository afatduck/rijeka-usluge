import { createPopup } from "~/components/popup";
import { categoryColor, categoryLocal } from "~/utils/treasures";

const TITLE = "Pomoc"

const buildHintPopup: Factory<TreasureFactoryProps> = ({root, close, treasure}) => {
    const h2 = document.createElement('h2');
    h2.textContent = TITLE
    root.append(h2);

    const category = document.createElement('p')
    const categoryI = document.createElement('i')
    const categoryB = document.createElement('b')

    categoryI.textContent = "Kategorija: "
    categoryB.textContent = categoryLocal(treasure.category)
    categoryB.style.color = categoryColor(treasure.category)

    category.append(categoryI)
    category.append(categoryB)
    root.append(category)

    const p = document.createElement('p')
    p.textContent = treasure.hint
    root.append(p)
}

export const showHintPopup = ({treasure}: TreasureFactoryProps) => {
    createPopup(props => buildHintPopup({...props, treasure}), false, true)
} 

