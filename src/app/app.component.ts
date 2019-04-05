import { Component } from '@angular/core';
import { SettingsService } from '@app/shared/services/settings.service';

@Component({
    selector: 'ngbm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private settingsService: SettingsService) {}

    sidenavLayout = this.settingsService.getLayout();

    expandedSidenav = false;

    navLinks = [
        {
            name: 'Home',
            icon: 'home',
            path: ''
        },
        {
            name: 'Playground',
            icon: 'local_play',
            path: 'playground'
        }
    ];

    switchLayout() {
        this.sidenavLayout = !this.sidenavLayout;
        this.settingsService.setLayout(this.sidenavLayout);
    }

    switchTheme() {
        this.settingsService.switchTheme();
    }

    toggleSidenavText() {
        this.expandedSidenav = !this.expandedSidenav;
    }
}
