import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Registro } from './registro';
import { RegistroService } from './registro.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-registro-detalle',
    templateUrl: './registro-detalle.component.html',
    styleUrls: ['./registro-detalle.component.css'],
    providers: [ RegistroService ],
})

export class RegistroDetalleComponent implements OnInit {

    registro: Registro;

    constructor( private registroService: RegistroService,
                 private route: ActivatedRoute,
                 private location: Location ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap( (params: ParamMap) => this.registroService.getRegistro( +params.get('posicion')))
            .subscribe( registro => this.registro = registro );
    }

    goBack(): void {
        this.location.back();
    }
}

