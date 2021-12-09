import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriptoComponent } from './components/cripto/cripto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CriptoVentaComponent } from './components/cripto-venta/cripto-venta.component';



@NgModule({
  declarations: [
    CriptoComponent,
    CriptoVentaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CriptoVentaComponent
  ]
})
export class CriptoModule { }
