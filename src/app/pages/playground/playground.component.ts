import { Component } from '@angular/core';

@Component({
    selector: 'ngbm-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
    matColors = ['primary', 'accent', 'warn'];

    bootstrapColors = [
        'primary',
        'secondary',
        'info',
        'success',
        'danger',
        'dark',
        'light'
    ];
}
