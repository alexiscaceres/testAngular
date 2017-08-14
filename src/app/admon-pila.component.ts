import { Component } from '@angular/core';

import { Registro } from './registro';
import { RegistroService } from './registro.service';

@Component({
    selector: 'app-admon-pila',
    templateUrl: './admon-pila.component.html',
    styleUrls: ['./admon-pila.component.css']
})

export class AdmonPilaComponent {

    nuevoReg: Registro;

    constructor( private registroService: RegistroService ) { }

    onClickAgregar( nombre: String ): void {

        // this.registroService.addRegistro( this.nuevoReg.nombre  );
        // this.nuevoReg.nombre = '' ;
    }

    onClickEliminar( ): void {

    }

}
