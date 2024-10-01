import { Pipe, PipeTransform } from '@angular/core';
import { ListaTest } from '../interfaces/interfaces';

@Pipe({
  name: 'FilterListaTest'
})
export class FilterListaTestPipe implements PipeTransform {

  transform(arreglo: ListaTest[], texto:string='',columna: string = 'entidad_con'): ListaTest[] {
    if ( texto === '' ) {
      return arreglo;
    }

    if ( texto === 'clear') {
      return arreglo;
    }

    

    if ( !arreglo ) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();
    
    return arreglo.filter(
      (item:any) => item[columna].toLowerCase().includes( texto )
    );

  }

}
