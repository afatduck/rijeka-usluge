import { createPopup } from "~/components/popup";
import { showServiceInfo } from "./createServiceInfo";
import { isLastTreasure } from "~/utils/treasures";

const TITLE = "Blago pronađeno!"

const DESC_NORMAL = `
Čestitamo! Pronašao si novu uslugu! Pogledaj što ona nudi!

No tu potraga ne prestaje, na karti ćeš pronaći novu lokaciju koja ti otkriva sljedeći uslugu. Sretno! 
`

const DESC_LAST_CAT = `
Čestitamo! Pronašao si novu i ujedno zadnju uslugu ove kategorije! Pogledaj što ona nudi!

No tu potraga ne prestaje, iako si došao do kraja ove staze, na karti te još čekaju drugi putevi. Sretno! 
`

const DESC_LAST_ABSOLUTE = `
Čestitamo! Pronašao si novu i ujedno zadnju uslugu u cijeloj igri!

Najiskrenije zahvale od našegi tima, mi smo: Reo, Richard, Enea i Patrik. Nadamo se da ti je igranje ove igre pružalo i
zabavu i neke nove i korisne informacije.
`

const buildNofifPopup: Factory<NotifyFindFactoryProps> = ({root, close, treasure, absolueLast}) => {
    const h2 = document.createElement('h2');
    h2.textContent = TITLE
    root.append(h2);

    let desc = DESC_NORMAL;
    if (absolueLast) {
        desc = DESC_LAST_ABSOLUTE
    } else if (isLastTreasure(treasure)) {
        desc = DESC_LAST_CAT
    }

    desc.split('\n\n').forEach(text => {
        const p = document.createElement('p')
        p.textContent = text
        root.append(p)
    })

    const button = document.createElement('button')
    button.textContent = "Pogledaj uslugu."
    button.style.display = 'block'

    button.addEventListener('click', () => {close!(); showServiceInfo({treasure})})
    root.append(button)
}

export const showNotifyFind = ({treasure, absolueLast}: NotifyFindFactoryProps) => {
    createPopup(props => buildNofifPopup({...props, treasure, absolueLast}), false, true)
} 

interface NotifyFindFactoryProps extends TreasureFactoryProps {
    absolueLast: boolean
}