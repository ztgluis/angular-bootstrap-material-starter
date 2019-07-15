import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ngbm-api-testing',
    templateUrl: './api-testing.component.html',
    styleUrls: ['./api-testing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiTestingComponent {
    navLinks = [
        {
            path: 'swapi',
            label: 'SWAPI'
        }
    ];
}
