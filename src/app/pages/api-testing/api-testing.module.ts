import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { ApiTestingComponent } from './api-testing.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ApiTestingComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'swapi',
                        pathMatch: 'full'
                    },
                    {
                        path: 'swapi',
                        loadChildren: () =>
                            import('./swapi/swapi.module').then(
                                m => m.SwapiModule
                            ),
                        data: {
                            title: 'SWAPI',
                            name: 'Star Wars API',
                            icon: 'home'
                        }
                    }
                ]
            }
        ])
    ],
    declarations: [ApiTestingComponent]
})
export class ApiTestingModule {}
