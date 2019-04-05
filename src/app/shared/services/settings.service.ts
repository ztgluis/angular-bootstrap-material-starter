import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const Themes = {
    default: 'default-theme.css',
    dark: 'dark-theme.css'
};

const StorageKeys = {
    theme: 'theme',
    layout: 'sidenav-layout'
};

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    constructor(public storageService: StorageService) {
        this.setTheme();
    }

    selectedTheme =
        this.storageService.get(StorageKeys.theme) || Themes.default;

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
        if (link) {
            link['href'] = theme;
        }
        this.storageService.set(StorageKeys.theme, theme);
    }

    setLayout(isDefault) {
        this.storageService.set(StorageKeys.layout, isDefault);
    }

    getLayout() {
        return this.storageService.get(StorageKeys.layout);
    }
}
