import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraCriptoComponent } from './components/compra-cripto/compra-cripto.component';
import { CriptoModule } from '../cripto/cripto.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalCompraComponent } from './components/modal-compra/modal-compra.component';



@NgModule({
  declarations: [
    CompraCriptoComponent,
    ModalCompraComponent
  ],
  imports: [
    CommonModule,
    CriptoModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CompraCriptoModule { }
