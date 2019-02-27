import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    constructor() { }

    defaultTheme = true;

    switchTheme() {
        let theme;

        if (this.defaultTheme) {
            theme = 'dark-theme.css';
        } else {
            theme = 'default-theme.css';
        }

        this.defaultTheme = !this.defaultTheme;

        window.localStorage.setItem('theme', JSON.stringify(theme));
        let link = document.querySelector('link[href*="-theme"]');

        link['href'] = theme;
    }

}
