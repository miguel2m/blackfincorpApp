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
  msgError: string = "";
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

  textoBuscar: string = '';


  @Output()
  public onNewListaTest: EventEmitter<RespBlackfin> = new EventEmitter();
  @Output()
  public onSearchListaTest: EventEmitter<string> = new EventEmitter();

  constructor(private blackfinService: BlackfinService) {}

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
    this.generateItems(this.filterListaTest.fecha_siniestro_desde,this.filterListaTest.fecha_siniestro_hasta);
    this.filterRefresh();
  }


  onSearchChange( event: any ) {
    this.textoBuscar = event.detail.value;
    if(this.textoBuscar !== ''){
      this.onSearchListaTest.emit(this.textoBuscar);
    }
  }

  onSearchClear( event: any ) {
    if(this.textoBuscar !== ''){
      this.onSearchListaTest.emit("clear");
    }
  }

  async generateItems(desde:string,hasta:string) {
    this.data = await this.blackfinService.getCotizadorAsync(desde,hasta);
    this.onNewListaTest.emit({...this.data});
  }


}
