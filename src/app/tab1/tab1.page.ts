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
    this.generateItems()
  }

  private async generateItems() {
    this.data = await this.blackfinService.getCotizadorAsync("2024-08-01T00:43:11.283Z","2024-10-01T15:43:11.283Z");
    this.listaTest =this.data.listaTest||[];
    //this.onNewListaTest.emit({...this.data});

    // this.blackfinService.getCotizador("2024-07-30T00:43:11.283Z","2024-07-30T15:43:11.283Z").subscribe( (resp:RespBlackfin) => {
    //   this.data=resp
    //   if(this.data.listaTest)
    //     this.listaTest =this.data.listaTest||[];
    //   this.msgError = this.data.mensaje||"";
    // });
  }

}
