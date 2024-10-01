import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilterListaTest, ListaTest, RespBlackfin } from 'src/app/interfaces/interfaces';
import { BlackfinService } from 'src/app/services/blackfin.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent  implements OnInit {
  currentdate = new Date(); 
  data: RespBlackfin = {};
  listaTests: ListaTest[] =[];
  filterListaTest: FilterListaTest ={
    referencia_ent:"",
    posicion_ent:"",
    fecha_siniestro_desde: String(this.currentdate.toISOString()),
    fecha_siniestro_hasta: String(this.currentdate.toISOString()),
    matricula_ent: "",
    matricula_con: "",
    cod_entidad_con: "",
    entidad_con: ""
  }
  showFilter: boolean = false;

  @Output()
  public onNewListaTest: EventEmitter<FilterListaTest> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.filterRefresh();
  }

  filterRefresh(){
    this.filterListaTest.referencia_ent="";
    this.filterListaTest.posicion_ent="";
    this.filterListaTest.fecha_siniestro_desde= String(this.currentdate.toISOString());
    this.filterListaTest.fecha_siniestro_hasta= String(this.currentdate.toISOString());
    this.filterListaTest.matricula_ent= "";
    this.filterListaTest.matricula_con= "";
    this.filterListaTest.cod_entidad_con= "";
    this.filterListaTest.entidad_con= "";
    this.showFilter = false;
  }

  search( fSearch: NgForm ) {

    if ( fSearch.invalid ) { return; }
    this.onNewListaTest.emit({...this.filterListaTest});

    this.filterRefresh();
  }

}
