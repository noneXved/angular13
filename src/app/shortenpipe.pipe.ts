import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenpipe'
})
export class ShortenpipePipe implements PipeTransform {
  transform(value: any): any {
    return value.substr(0, 10) + ' ...';
  }

}
