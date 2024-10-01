import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ItemComponent,
    ItemsComponent,
    FiltersComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,

  ],
  exports: [
    ItemsComponent,
    FiltersComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
