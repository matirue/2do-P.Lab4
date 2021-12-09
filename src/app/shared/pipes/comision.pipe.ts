import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comision'
})
export class ComisionPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 10) {
      return "Baja comision";
    } else if(value >= 10 && value <= 20){
      return "Buena comision";
    }else{
      return "Mucha comision";
    }
  }

}
