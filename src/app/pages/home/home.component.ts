import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngbm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    defaultTheme = true;

    switchTheme() {
        let theme;

        if (this.defaultTheme) {
            theme = 'material-dark-theme.css';
        } else {
            theme = 'material-default-theme.css';
        }

        this.defaultTheme = !this.defaultTheme;

        window.localStorage.setItem('theme', JSON.stringify(theme));
        let link = document.querySelector('link[href*="material-"]');

        link['href'] = theme;
    }

    ngOnInit() {
    }

}
