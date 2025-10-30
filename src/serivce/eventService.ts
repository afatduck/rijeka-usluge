class EventService {
    private static afterWelcomeScreen: SavedCallback[] = []
    private static welcomeScreenOpen: boolean = true

    public static welcomeScreenClosed() {
        this.afterWelcomeScreen.forEach(cb => cb.fn())
        this.afterWelcomeScreen = []
        this.welcomeScreenOpen = false;
    }

    public static onWelcomeScreenClosed(fn: () => any): CancelationToken  {
        const ct: CancelationToken = "welcome_" + new Date().getTime().toString()
        if (this.welcomeScreenOpen) {
            this.afterWelcomeScreen.push({
                fn, cancelationToken: ct
            })
            return ct
        }
        
        fn();
        return ct;
    }

    public static cancel(ct: CancelationToken): boolean {
        let queue: SavedCallback[];
        switch (ct.split('_')[0]) {
            case 'welcome':
                queue = this.afterWelcomeScreen
                break;
            default:
                return false;
        }
        queue.forEach((cb, i) => {
            if (cb.cancelationToken == ct) {
                queue.splice(i, 1);
                return true
            }
        })
        return false
    }
}

export default EventService

interface SavedCallback {
    fn: () => void
    cancelationToken: string
}