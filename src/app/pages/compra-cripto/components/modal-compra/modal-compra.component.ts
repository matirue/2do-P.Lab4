import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cripto } from 'src/app/shared/models/cripto';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.scss']
})
export class ModalCompraComponent implements OnInit {
  formGP:FormGroup;
  data:any[] = [];
  compra:Cripto[] = [];
  @Input('dataToCompra') dataToCompra:any[] = [];
  constructor(private fb:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }
  ngOnChanges():void{
    this.data = this.dataToCompra;
  }
  initForm() {
    this.formGP = this.fb.group({
      cantidad: ['', [Validators.required, Validators.max(99)]],
    });
  }
  public get form(): any {
    return this.formGP.controls;
  }
  get cantidadValue(): number {
    return this.formGP.get('cantidad').value;
  }
  public addCompra():void{
    let comp = {
      nombre: this.data[0].nombre,
      comision: this.data[0].comision,
      costoActual: this.data[0].costoActual,
      ano: this.data[0].ano,
      cantidad: this.cantidadValue,
    }
    console.log(this.data[2].compra)
    let array:any = this.data[2].compra;
    array.push(comp);
    console.log(array)
    this.userService.updateCompra(this.data[2].id,array).then(response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra Exitosa',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.reload();
      });
    })
  }

}
