import { Component } from '@angular/core';
import { RespBlackfin } from '../interfaces/interfaces';
import { BlackfinService } from '../services/blackfin.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: RespBlackfin = {
    codigoError:'',
    mensaje: '',
    listaTest: []
  };
  searchText: string ="";
  msgError: string = "";

  constructor(private blackfinService: BlackfinService) {}

  onSearchListaTest(data: RespBlackfin):void {
    this.data=data;
    this.msgError=data.mensaje||'';
  }
  onSearchListaTestFilter(value: string):void {  
      this.searchText=value;
  }
  
}
