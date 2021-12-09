import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], arg:any): any {
    const result = [];
    for (const user of value) {
      if (user.type === arg) {
        result.push(user);
      }
      if (arg === 'todos') {
        result.push(user);
      }
    }
    return result;
  }

}
