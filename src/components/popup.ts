import '~/styles/popup.css';

export const createPopup = (contentFactory: Factory, fullscreen: boolean = false, showCloseButton: boolean = true) => {
    const bg = document.createElement('div');
    bg.classList = 'popup_bg'

    const close = () => bg.remove();
    
    const inner = document.createElement('div')
    inner.classList = 'popup_inner'

    if (showCloseButton) {
        const closeButton = document.createElement('i')
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => close())
        inner.append(closeButton)
    }

    if (fullscreen) {
        bg.classList.add("popup_fullscreen")
    }

    bg.append(inner)
    contentFactory({root: inner, close: close})
    document.body.append(bg)
}