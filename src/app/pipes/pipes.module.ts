import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListaTestPipe } from './filterlistatest.pipe';



@NgModule({
  declarations: [
    FilterListaTestPipe
  ],
  exports:[
    FilterListaTestPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
