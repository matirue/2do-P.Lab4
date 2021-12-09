import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: User[], arg:any): any {
    const result = [];
    for (const user of value) {
      if (user.vende !== undefined) {
        console.log(user.vende)
      }
    }
    return result;
  }

}
