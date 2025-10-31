import { createPopup } from "~/components/popup";

const TITLE = "Nepoznata lokacija."

const MESSAGE = `
Za korištenje ove aplikacije potrebno je omogućiti koriištenje lokcaije. Pobirinite se da koristite podržani uređaj i preglednik da biste nastavili.
`

export const LOCATION_REQUEST_POPUP_ID = "location_popup" 

const buildLocationRequest: Factory = ({root, close}) => {
    const h2 = document.createElement('h2');
    h2.textContent = TITLE
    root.append(h2);

    const p = document.createElement('p')
    p.textContent = MESSAGE
    root.append(p)

    root.parentElement!.id = LOCATION_REQUEST_POPUP_ID
}

export const showLocationRequest = () => {
    createPopup(buildLocationRequest, false, false)
} 