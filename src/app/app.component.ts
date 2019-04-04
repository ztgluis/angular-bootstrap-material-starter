import { Component } from '@angular/core';

@Component({
    selector: 'ngbm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

    toggleSidenavText() {
        this.displaySidenavText = !this.displaySidenavText;
    }
}
