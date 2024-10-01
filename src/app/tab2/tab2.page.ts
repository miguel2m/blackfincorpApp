import { Component } from '@angular/core';
import { FilterListaTest, ListaTest, RespBlackfin } from '../interfaces/interfaces';
import { BlackfinService } from '../services/blackfin.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: RespBlackfin = {};
  listaTest: ListaTest[] =[];

  msgError: string = "";

  constructor(private blackfinService: BlackfinService) {}

  onSearchListaTest(filterListaTest: FilterListaTest):void {
    console.log(filterListaTest);
    this.generateItems(filterListaTest.fecha_siniestro_desde,filterListaTest.fecha_siniestro_hasta)
  }

  
  private generateItems(desde:string,hasta:string) {
    this.blackfinService.getCotizador(desde,hasta).subscribe( (resp:RespBlackfin) => {
      this.data=resp
      this.listaTest =this.data.listaTest||[];
      this.msgError = this.data.mensaje||"";
    });
  }

}
