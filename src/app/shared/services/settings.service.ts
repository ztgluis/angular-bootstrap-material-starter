import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export const Themes = {
    default: 'default-theme.css',
    dark: 'dark-theme.css'
};

export const StorageKeys = {
    theme: 'theme',
    layout: 'sidenav-layout'
};

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    constructor(
        @Inject(DOCUMENT) private document: HTMLDocument,
        public storageService: StorageService
    ) {
        this.setTheme(this.selectedTheme);
    }

    selectedTheme =
        this.storageService.get(StorageKeys.theme) || Themes.default;

    switchTheme() {
        switch (this.selectedTheme) {
            case Themes.default:
                this.setTheme(Themes.dark);
                break;
            default:
                this.setTheme(Themes.default);
        }
    }

    setTheme(theme) {
        this.selectedTheme = theme;
        const link = this.document.querySelector('link[href*="-theme"]');
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
