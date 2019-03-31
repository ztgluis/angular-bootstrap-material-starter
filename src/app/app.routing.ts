import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: './pages/home/home.module#HomeModule'
            },
            {
                path: 'playground',
                loadChildren:
                    './pages/playground/playground.module#PlaygroundModule'
            }
        ])
    ],
    exports: [RouterModule]
})
export class RoutingModule {}
