import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'ngbm-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
    group = new FormGroup({
        fontSize: new FormControl('')
    });

    matColors = ['primary', 'accent', 'warn'];

    twbsColors = [
        'primary',
        'secondary',
        'info',
        'success',
        'danger',
        'dark',
        'light'
    ];
}
