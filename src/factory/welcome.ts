import { createPopup } from "~/components/popup";
import EventService from "~/serivce/eventService";

import "~/styles/welcome.css"

const CLASSNAME = "welcome"
const WELCOME_LS_KEY = 'WELCOME_MESSAGE_SEEN'
const URA_URL = "./assets/ura.png"

const DESC = `
Jeste li znali da Grad Rijeka ulaže mnogo vremena novaca i resursa kako bi pružila razne usluge mladima u razdoblju od 15 do 30 godina. Mnogi mladi nisu svjesni svih tih usluga, a one im mogu pomoći u raznim sferama kao što je zdravlje, edukacija, zabava, potpora i slično... Kroz ovu interaktivnu web igru možete na zabavan način kretati se Rijekom i otkriti brojne usluge koje nudi.

Ukratko, ova igra funkcionira kao lov na blago. Kretati ćete se uživo gradom, a vaš mobitel će pratiti vašu lokaciju. Jednom kada stignete na početnu lokaciju, utključati će vam se tri moguća puta. Svaki put odgovara jednoj od kategorija usluga. Kada stignete do lokacije, dobiti ćete infomacije o jednoj od usluga zajedno sa poveznicom gdje možete saznati više. Osim toga dobiti ćete i upute za sljedeću lokaciju, sve dok ih ne otključate sve.
`

const WARNING = `
Molimo Vas da se dok hodate gradom i tražite skrivene lokacije čuvate i pazite na vašu okolinu. 
`

const buildWelcomeMessage: Factory = ({root, close}) => {
    const title = document.createElement('h1');
    ["Dobrodošli!", "", "RijekaUslugeGO!"].forEach(s => {
        const span = document.createElement('span')
        span.textContent = s
        title.append(span)
    })
    root.append(title);

    DESC.split('\n').forEach(paragraph => {
        if (paragraph) {
            const p = document.createElement('p')
            p.textContent = paragraph
            root.append(p)
        }
    })

    const warning = document.createElement('p')
    warning.textContent = WARNING
    warning.classList.add('warning')
    root.append(warning)

    const button = document.createElement("button")
    button.textContent = "Shvaćam!"
    root.append(button)

    button.addEventListener('click', () => {
        close!();
        localStorage.setItem(WELCOME_LS_KEY, "true");
        EventService.welcomeScreenClosed()
    })

    const ura = new Image();
    ura.src = URA_URL;
    ura.classList.add('ura')
    root.parentElement!.append(ura)

    root.classList.add(CLASSNAME)
}

export const showWelcomeMessage = () => {
    if (!localStorage.getItem(WELCOME_LS_KEY)) {
        createPopup(buildWelcomeMessage, true, false)
        return
    }
    EventService.welcomeScreenClosed()
} 