import { Component } from '@angular/core';
import { ThemeService } from '@app/shared/services/theme.service';

@Component({
    selector: 'ngbm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private themeService: ThemeService) {}
    displaySidenavText = false;
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

    switchTheme() {
        this.themeService.switchTheme();
    }

    toggleSidenavText() {
        this.displaySidenavText = !this.displaySidenavText;
    }
}
