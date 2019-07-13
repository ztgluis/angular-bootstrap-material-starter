import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { SwapiComponent } from './swapi.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: SwapiComponent
            }
        ])
    ],
    declarations: [SwapiComponent]
})
export class SwapiModule {}
