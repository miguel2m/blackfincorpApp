import { Component, Input, OnInit } from '@angular/core';
import { ListaTest } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent  implements OnInit {

  @Input() items: ListaTest[] = [];
  @Input() msgError: string = "";

  constructor() { }

  ngOnInit() {}

}
