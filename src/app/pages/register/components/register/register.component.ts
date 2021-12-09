import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  file: File;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
    private router:Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      file: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  get emailValue(): string {
    return this.registerForm.get('email').value;
  }
  get passwordValue(): string {
    return this.registerForm.get('password').value;
  }
  get typeValue(): string {
    return this.registerForm.get('type').value;
  }

  public get form(): any {
    return this.registerForm.controls;
  }

  public photoValue(event: any): void {
    this.file = event.target.files[0];
  }

  public uploadFile(): void {
    let fileName: string = `${this.emailValue}_${this.typeValue}`;
    let filePathReference: string = `uploads/${fileName}.png`;
    this.storageService.uploadFile(this.file, filePathReference).then(response => {
      this.storageService.downloadFile(filePathReference).subscribe(filePath => {
        console.log(filePath)
        this.addUser(filePath);
      })
    }).catch(error => {
      console.log(error);
    })
  }

  public addUser(filePath: string): void {
    let user: User = {
      email: this.emailValue,
      password: this.passwordValue,
      photo: filePath,
      type: this.typeValue,
      vende: [],
      habilitado: false,
      compra: []
    };
    this.authService.register(user).then(()=>{
      this.userService
      .addUser(user)
      .then((response) => {
        this.authService.login(user).then(response => {
          localStorage.setItem('user', JSON.stringify(user));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro Exitoso',
            text: 'Bienvenido!',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigate(['home'])
          })
        })       
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Error durante registros!',
          showConfirmButton: false,
          timer: 1500,
          footer: 'Try Again'
        })
      });
    }).catch(error => {
      Swal.fire({
        icon: 'error',
          title: 'Error...',
          text: 'Error durante registros!',
          showConfirmButton: false,
          timer: 1500,
          footer: 'Try Again'
      })
    })
    
  }

  public redirect(): void {
    this.router.navigate(['login']);
  }

}
