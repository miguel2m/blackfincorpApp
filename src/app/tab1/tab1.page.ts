import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

import { BlackfinService } from '../services/blackfin.service';
import { ListaTest, RespBlackfin } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  data: RespBlackfin = {};
  listaTest: ListaTest[] =[];

  msgError: string = "";

  constructor(private blackfinService: BlackfinService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    
    this.generateItems()
  }

  // onIonInfinite(ev) {
  //   this.generateItems();
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   }, 500);
  // }

  private generateItems() {
    this.blackfinService.getCotizador("2024-07-30T00:43:11.283Z","2024-07-30T15:43:11.283Z").subscribe( (resp:RespBlackfin) => {
      this.data=resp
      if(this.data.listaTest)
        this.listaTest =this.data.listaTest||[];
      this.msgError = this.data.mensaje||"";
    });
  }

}
