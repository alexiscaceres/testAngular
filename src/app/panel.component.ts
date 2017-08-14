import { Component, OnInit } from '@angular/core';

import { Registro } from './registro';
import { RegistroService } from './registro.service';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {

    registros: Registro[] = [];

    constructor( private registroService: RegistroService ) { }

    ngOnInit(): void {
        this.registroService.getRegistros().then(
            registros => this.registros = registros.slice(1, 5)
        );
    }

}
