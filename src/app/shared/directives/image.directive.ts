import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImage]',
})
export class ImageDirective {
  @Input('appImage') appImage: any;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundImage = `url(${this.appImage.photo})`;
    this.el.nativeElement.style.backgroundPosition = 'center';
    this.el.nativeElement.style.backgroundRepeat = 'none'
    this.el.nativeElement.style.backgroundSize = '410px'
    this.el.nativeElement.style.innerHTML = this.appImage.email;
  }
}
