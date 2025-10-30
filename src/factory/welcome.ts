import { createPopup } from "~/components/popup";
import EventService from "~/serivce/eventService";

const WELCOME_LS_KEY = 'WELCOME_MESSAGE_SEEN'

const desc = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta ornare nisl, a ultricies lectus hendrerit sed. Duis convallis sagittis nibh. Curabitur pharetra tortor et ex pulvinar tincidunt. Morbi nec nulla et arcu placerat tempus. Proin nibh neque, ultricies at ex nec, cursus semper risus. Curabitur neque tellus, vestibulum venenatis ex molestie, mattis tincidunt lorem. Mauris vitae risus vitae diam tristique interdum ut quis tellus. Aliquam porttitor justo sit amet nibh vehicula, a tincidunt ligula tincidunt. Duis vel eros eu lectus maximus faucibus. Vestibulum efficitur purus nisi, et efficitur libero pretium ac.

Nam ut dapibus neque. Nunc eleifend nec nisl dignissim pretium. Suspendisse potenti. Donec gravida, diam eget consectetur sodales, arcu ipsum vulputate lacus, vel dapibus arcu felis et mi. Sed tempor nisi vitae erat maximus sollicitudin a luctus tellus. Phasellus dictum consequat magna et mollis. Maecenas vel massa pellentesque urna rutrum porttitor. Integer bibendum sodales purus, id rhoncus purus auctor eu. Proin euismod enim et dolor viverra mollis. Pellentesque nec ornare nisl, a facilisis ligula. Ut eget odio enim. Phasellus sodales urna eget mi varius congue.

Sed ornare velit in aliquet mattis. Phasellus elementum pretium tempus. Aliquam tempor justo ac arcu placerat cursus. Curabitur eu hendrerit metus. Curabitur facilisis velit ex, nec ullamcorper lacus rutrum a. Suspendisse vel libero ultrices, ultrices quam quis, scelerisque purus. Integer sed dui ut turpis porttitor gravida. Mauris sollicitudin nunc ut laoreet venenatis. Aliquam ultrices venenatis arcu in condimentum. Vestibulum ut leo laoreet, mattis quam et, ullamcorper nisl. Etiam sem est, placerat iaculis interdum ac, aliquam rutrum purus. Aliquam id enim quis velit egestas sodales sit amet vel ante. Quisque dignissim sapien dictum faucibus suscipit. Donec ut ipsum quis sem tincidunt sagittis.

Nam leo tortor, aliquam ac dapibus a, eleifend id mauris. Integer massa purus, iaculis eu lacus a, faucibus ultricies libero. Aliquam erat volutpat. Donec ex nibh, dapibus eu sapien in, bibendum tempor risus. Quisque egestas vitae lectus vitae sodales. Nam diam ligula, aliquam ut pulvinar eu, commodo nec nibh. Suspendisse ut gravida arcu. Nam congue sem justo, in varius velit volutpat pellentesque. Vivamus eget vehicula mauris. Duis semper turpis ac ligula aliquet, sed malesuada sem tincidunt. Aliquam in lectus elit. Nullam commodo velit eros, non finibus nisl dapibus at. Praesent vel quam eget ante imperdiet imperdiet. Sed nec eros nunc. Pellentesque vitae sagittis ex, vel ultrices nibh. Nunc cursus vehicula semper.

In ultrices tincidunt nunc, eget laoreet mauris rutrum et. Nunc luctus a neque vitae facilisis. Aliquam a condimentum mi. In scelerisque pulvinar turpis a blandit. Proin semper massa sed enim vulputate, sit amet dignissim turpis sollicitudin. Fusce porttitor commodo orci condimentum ullamcorper. Pellentesque varius erat quis ligula commodo egestas. Cras dictum diam non ultrices condimentum. In hac habitasse platea dictumst. Nulla rutrum semper massa ac pellentesque. Mauris blandit in est sit amet commodo. Sed justo elit, faucibus et velit vel, auctor sagittis nibh. Curabitur maximus pretium semper. Nulla a ipsum vitae metus semper mattis. Nam vel euismod leo. Donec at ultricies ipsum.
`

const buildWelcomeMessage: Factory = ({root, close}) => {
    const title = document.createElement('h1');
    title.textContent = "Dobrodosli"
    root.append(title);

    desc.split('\n').forEach(paragraph => {
        if (paragraph) {
            const p = document.createElement('p')
            p.textContent = paragraph
            root.append(p)
        }
    })

    const button = document.createElement("button")
    button.textContent = "Shvacam!"
    button.style.display = 'block';
    button.style.marginTop = '2rem';
    button.style.marginBottom = '6rem';
    root.append(button)

    button.addEventListener('click', () => {
        close!();
        localStorage.setItem(WELCOME_LS_KEY, "true");
        EventService.welcomeScreenClosed()
    })
}

export const showWelcomeMessage = () => {
    if (!localStorage.getItem(WELCOME_LS_KEY)) {
        createPopup(buildWelcomeMessage, true, false)
        return
    }
    EventService.welcomeScreenClosed()
} 