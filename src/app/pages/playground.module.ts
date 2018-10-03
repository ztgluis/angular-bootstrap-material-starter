import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { PlaygroundComponent } from '@app/pages/playground.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: PlaygroundComponent
            }
        ])
    ],
    declarations: [
        PlaygroundComponent
    ]
})

export class PlaygroundModule { }
