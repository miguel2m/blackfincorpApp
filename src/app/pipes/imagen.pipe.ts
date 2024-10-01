import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
  standalone: true
})
export class ImagenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
