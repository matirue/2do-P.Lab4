import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailDirective } from './directives/email.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ComisionPipe } from './pipes/comision.pipe';
import { ImageDirective } from './directives/image.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    EmailDirective,
    FilterPipe,
    ComisionPipe,
    ImageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    EmailDirective,
    FilterPipe,
    ComisionPipe,
    ImageDirective
  ]
})
export class SharedModule { }
