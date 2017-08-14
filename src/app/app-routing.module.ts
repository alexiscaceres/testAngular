import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrosComponent } from './registros.component';
import { RegistroDetalleComponent } from './registro-detalle.component';
import { PanelComponent } from './panel.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/registros',
        pathMatch: 'full'
    },
    {
        path: 'registros',
        component: RegistrosComponent,
    },
    {
        path: 'panel',
        component: PanelComponent,
    },
    {
        path: 'detalle/:posicion',
        component: RegistroDetalleComponent
    }
];

@NgModule({

    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
