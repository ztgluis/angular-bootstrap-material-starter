import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: './pages/home/home.module#HomeModule'
            }
        ])
    ],
    exports: [RouterModule]
})

export class RoutingModule { }
