import { createPopup } from "~/components/popup";

const TITLE = "Potraga počinje"
const DESC = `
Čestitamo, došao si na početnu lokaciju! Na mapi možeš sada pronaći tri upitnika koji te vode na
tri različite lokacije. Klikni na upitnik ako trebaš pomoć, svaka od lokacija te vodi na poseban put koji
odgovara zasebnoj kategoriji usluga.

Sretno i zabavi se!
`

const notifyStartContent: Factory = ({root, close}) => {
    const h2 = document.createElement('h2');
    h2.textContent = TITLE
    root.append(h2);

    DESC.split('\n\n').forEach(text => {
        const p = document.createElement('p')
        p.textContent = text
        root.append(p)
    })
}

export const notifyStart = () => {
    createPopup(props => notifyStartContent({...props}), false, true)
} 

