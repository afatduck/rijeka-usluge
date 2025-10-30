import { createPopup } from "~/components/popup";

const TITLE = "Nepoznata lokacija."

const MESSAGE = `
Za korištenje ove aplikacije potrebno je omogućiti koriištenje lokcaije. Pobirinite se da koristite podržani uređaj i preglednik da biste nastavili.
`

export const LOCATION_REQUEST_POPUP_ID = "location_popup" 

const buildLocationRequest: Factory = ({root, close}) => {
    const h1 = document.createElement('h1');
    h1.textContent = TITLE
    root.append(h1);

    const p = document.createElement('p')
    p.textContent = MESSAGE
    root.append(p)

    root.parentElement!.id = LOCATION_REQUEST_POPUP_ID
}

export const showLocationRequest = () => {
    createPopup(buildLocationRequest, false, false)
} 