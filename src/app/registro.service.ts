import { Injectable } from '@angular/core';
import { Registro } from './registro';
import { registros } from './mock-registros';
// import { REGISTROS } from './mock-registros';



@Injectable()

export class RegistroService {

    getRegistros(): Promise<Registro[]> {
        // return Promise.resolve(REGISTROS);
        return Promise.resolve(registros);
    }

    getRegistrosSlowly(): Promise<Registro[]> {
        return new Promise( resolve => {
            setTimeout(() => resolve( this.getRegistros()), 2000 );
        });
    }

    getRegistro( posicion: number ): Promise<Registro> {
        return this.getRegistros()
                    .then( registros => registros.find( registro => registro.posicion === posicion ));
    }

    addRegistro( registro: Registro ): void {
        //registros.push(registro);
    }

}


