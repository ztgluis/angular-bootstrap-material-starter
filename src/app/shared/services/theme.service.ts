import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const Themes = {
    default: 'default-theme.css',
    dark: 'dark-theme.css'
};

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    constructor(public storageService: StorageService) {
        this.setTheme();
    }

    selectedTheme = this.storageService.get('theme') || Themes.default;

    switchTheme() {
        switch (this.selectedTheme) {
            case Themes.default:
                this.selectedTheme = Themes.dark;
                break;
            default:
                this.selectedTheme = Themes.default;
        }
        this.setTheme();
    }

    setTheme(theme = this.selectedTheme) {
        const link = document.querySelector('link[href*="-theme"]');
        link['href'] = theme;
        this.storageService.set('theme', theme);
    }
}
