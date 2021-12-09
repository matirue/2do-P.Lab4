import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')).type;
  }
  public signOut(): void {
    this.authService
      .logout()
      .then((response) => {
        this.authService.isLoged = false;
        localStorage.clear();
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public redirect(redir: string): void {
    switch (redir) {
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'login':
        this.router.navigate(['login']);
        break;
      case 'register':
        this.router.navigate(['register']);
        break;
      case 'add':
        this.router.navigate(['add']);
        break;
      case 'listVend':
        this.router.navigate(['listVendedor']);
        break;
      case 'listUser':
        this.router.navigate(['listUser']);
        break;
      case 'cripto':
        this.router.navigate(['cripto']);
        break;
      case 'compra':
        this.router.navigate(['compra']);
        break;

      default:
        break;
    }
  }
}
