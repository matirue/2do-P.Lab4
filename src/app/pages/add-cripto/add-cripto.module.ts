import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCriptoComponent } from './components/add-cripto/add-cripto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnableVendedorComponent } from './components/anable-vendedor/anable-vendedor.component';



@NgModule({
  declarations: [
    AddCriptoComponent,
    ListUsersComponent,
    AnableVendedorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AddCriptoModule { }
