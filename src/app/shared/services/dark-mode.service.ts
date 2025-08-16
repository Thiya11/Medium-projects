import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class DarkModeService {
    private darkModeKey = 'dark-mode';

    constructor(){
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const saved = localStorage.getItem(this.darkModeKey);

        const isDark = saved ? saved === 'true' : prefersDark;
        this.setDarkMode(isDark);
    }

    setDarkMode(isDark: boolean) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem(this.darkModeKey, 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem(this.darkModeKey, 'false');
        }
    }

    toggleDarkMode() {
        const isDark = document.body.classList.contains('dark-mode');
        this.setDarkMode(!isDark);
    }

    isDarkMode(): boolean {
        return document.body.classList.contains('dark-mode');
    }


}