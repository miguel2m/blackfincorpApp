import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PipesModule } from '../pipes/pipes.module';



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
    PipesModule

  ],
  exports: [
    ItemsComponent,
    FiltersComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
