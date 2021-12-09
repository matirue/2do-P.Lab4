import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cripto } from 'src/app/shared/models/cripto';
import { CriptoService } from 'src/app/shared/services/cripto.service';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';
import Swal from'sweetalert2';

@Component({
  selector: 'app-add-cripto',
  templateUrl: './add-cripto.component.html',
  styleUrls: ['./add-cripto.component.scss'],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(300,style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})

export class AddCriptoComponent implements OnInit {
  criptoForm: FormGroup;
  dataOrigin: string[] = [];

  constructor(
    private fb: FormBuilder,
    private criptoService: CriptoService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.criptoForm = this.fb.group({
      costoActual: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      comision: ['', [Validators.required, Validators.max(99999)]],
      ano: ['', [Validators.required]]
    });
  }

  get nombreValue(): string {
    return this.criptoForm.get('nombre').value;
  }
  get costoActualValue(): string {
    return this.criptoForm.get('costoActual').value;
  }
  get comisionValue(): number {
    return this.criptoForm.get('comision').value;
  }
  get anoValue(): string {
    return this.criptoForm.get('ano').value;
  }

  public get form(): any {
    return this.criptoForm.controls;
  }

  public getOriginValue(event: string[]): void {
    this.dataOrigin = event;
  }

  public addCripto(): void {
    let cripto: Cripto = {
      nombre: this.nombreValue,
      costoActual: this.costoActualValue,
      comision: this.comisionValue,
      ano: this.anoValue
    };
    this.criptoService
      .addCripto(cripto)
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Carga de Cripto Exitosa!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.criptoForm.reset();
        })
        
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Cripto not added!',
          footer: 'Try Again'
        })
      });
  }

}
