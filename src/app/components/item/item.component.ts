import { Component, Input, OnInit } from '@angular/core';
import { ListaTest } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent  implements OnInit {
  @Input() item: ListaTest ={
    referencia_ent:"",
    cod_posicion_ent: "",
    tramitador: "",
    fecha_siniestro: "",
    matricula_ent: "",
    matricula_con: "",
    convenio: "",
    posicion_ent:"",
    cod_entidad_con: "",
    entidad_con: ""
  };
  @Input() index: number =0;

  constructor() { }

  ngOnInit() {}

}
