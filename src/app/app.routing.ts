import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: './pages/playground.module#PlaygroundModule'
            }
        ])
    ],
    exports: [RouterModule]
})

export class RoutingModule { }
