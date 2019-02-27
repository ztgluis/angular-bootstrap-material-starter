import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/shared/services/theme.service';

@Component({
    selector: 'ngbm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private themeService: ThemeService) { }

    switchTheme() {
        this.themeService.switchTheme();
    }

    ngOnInit() {
    }

}
