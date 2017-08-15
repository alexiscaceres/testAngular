import { Component, EventEmitter, Output } from '@angular/core';

import { RegistroService } from './registro.service';

@Component({
    selector: 'app-admon-pila',
    templateUrl: './admon-pila.component.html',
    styleUrls: ['./admon-pila.component.css']
})

export class AdmonPilaComponent {

    @Output( )
    eventClear = new EventEmitter( );

    constructor( private registroService: RegistroService ) { }

    onClickAgregar( nombre: string ): void {

        nombre = nombre.trim();
        if ( !nombre ) {
            return;
        }
        this.registroService.addRegistro(nombre);
    }

    onClickEliminar( ): void {

        // this.clearSelection( this.registroService.deleteRegistro( ) );
        let posicion: number = this.registroService.deleteRegistro( );
        this.clearSelection( posicion ) ;
    }

     clearSelection( posicion: number ): void {
    // clearSelection(  ): void {
        this.eventClear.emit( { posicion: posicion } );
    //    this.eventClear.emit( );
    }
}
