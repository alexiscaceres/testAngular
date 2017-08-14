import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegistroService } from './registro.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrosComponent } from './registros.component';
import { RegistroDetalleComponent } from './registro-detalle.component';
import { PanelComponent } from './panel.component';
import { AdmonPilaComponent } from './admon-pila.component';

@NgModule({

  declarations: [
    AppComponent,
    RegistrosComponent,
    RegistroDetalleComponent,
    PanelComponent,
    AdmonPilaComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [ RegistroService ],

  bootstrap: [ AppComponent ]
})

export class AppModule {

}
