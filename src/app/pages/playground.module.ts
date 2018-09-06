import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatRadioModule, MatSnackBarModule, MatSidenav, MatSidenavModule, MatSliderModule, MatStepperModule, MatTableModule, MatSelectModule, MatToolbarModule, MatTooltipModule, MatBadgeModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { PlaygroundComponent } from '@app/pages/playground.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: PlaygroundComponent
            }
        ]),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSnackBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatStepperModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    declarations: [
        PlaygroundComponent
    ]
})

export class PlaygroundModule { }
