import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwapiService } from '@app/pages/api-testing/swapi/swapi.service';
@Component({
    selector: 'ngbm-swapi',
    templateUrl: './swapi.component.html',
    styleUrls: ['./swapi.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwapiComponent implements OnInit {
    data: any = {};
    objectKeys = Object.keys;

    constructor(private swapiService: SwapiService) {}

    getData(url) {
        return this.swapiService.getData(url);
    }

    ngOnInit() {
        this.data['tabs'] = this.swapiService.getTabs();
    }
}
