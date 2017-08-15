import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Registro } from './registro';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})

export class RegistrosComponent implements OnInit {

  registros: Registro[];
  registroSel: Registro;

  constructor( private registroService: RegistroService,
               private router: Router ) { }

  getRegistros( ): void {
    this.registroService.getRegistros().then(registros => this.registros = registros);

    // this.registroService.getRegistrosSlowly().then( registros => this.registros = registros );
  }

  ngOnInit( ): void {
    this.getRegistros();
  }

  onSelect( registro: Registro ): void {
    this.registroSel = registro;
  }

  goToDetalle(): void {
    this.router.navigate(['/detalle', this.registroSel.posicion]);
  }

  // clearSelect( event ): void {
  clearSelect( posicion ) {

    // if ( posicion === this.registroSel.posicion ) {
      this.registroSel = null;
    // }
  }

}
