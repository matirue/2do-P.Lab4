import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective {

  constructor(private element: ElementRef) {
    console.log(element.nativeElement)
    let emailUser = JSON.parse(localStorage.getItem('user')).email; 
    element.nativeElement.innerHTML = emailUser;
  }

}
