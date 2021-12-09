import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          300,
          style({
            transform: 'translateY(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  type: string;
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getUsers();
    localStorage.clear();
  }
  

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get emailValue(): string {
    return this.loginForm.get('email').value;
  }
  get passwordValue(): string {
    return this.loginForm.get('password').value;
  }


  public get form(): any {
    return this.loginForm.controls;
  }

  public getUsers(): void {
    this.userService.getUsersWithID().subscribe((response) => {
      response.forEach((res) => {
        let user: User = {
          id: res.id,
          email: res.data().email,
          password: res.data().password,
          photo: res.data().photo,
          type: res.data().type,
          vende: res.data().vende,
          habilitado: res.data().habilitado,
          compra: res.data().compra
        };
        this.users.push(user);
      });
    });
  }

  public getCurrentUser(): User {
    for (const user of this.users) {
      if (
        this.emailValue === user.email &&
        this.passwordValue === user.password
      ) {
        return user;
      }
    }
    return null;
  }
  
  signIn(): void {
    let user = this.getCurrentUser();
    this.authService
      .login(user)
      .then((response) => {
        this.authService.isLoged = true;
        this.authService.type = this.type;
        localStorage.setItem('user', JSON.stringify(user));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigate(['home']);
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Email/Pass inexistente!',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  public fastAccess(user: string): void {

    switch (user) {
      case 'admin':
        this.loginForm.setValue({
          email: 'matiasrue@admin.com',
          password: '123456',
        });
        break;

      case 'vendedor':
        this.loginForm.setValue({
          email: 'vendedor1@vendedor.com',
          password: '123456',
        });
        break;

      case 'comprador':
        this.loginForm.setValue({
          email: 'comprador1@comprador.com',
          password: '123456',
        });
        break;
      default:
        break;
    }
  }

  public redirect(): void {
    this.router.navigate(['register']);
  }
}
