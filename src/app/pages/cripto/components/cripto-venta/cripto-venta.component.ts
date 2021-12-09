import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cripto } from 'src/app/shared/models/cripto';
import { CriptoService } from 'src/app/shared/services/cripto.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-cripto-venta',
  templateUrl: './cripto-venta.component.html',
  styleUrls: ['./cripto-venta.component.scss']
})
export class CriptoVentaComponent implements OnInit, OnChanges {
  @Input('criptoInput') criptoInput:Cripto[] = [];
  criptosVende: Cripto[] = [];
  email:string;
  password:string;
  constructor(private criptoService: CriptoService,
    private userService: UserService) {}

  ngOnInit(): void {
    this.getUserData();
    this.getCriptosFromUser();
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log(changes.criptoInput.currentValue)
    for (const cripto of this.criptoInput) {
      this.criptosVende.push(cripto);
    }
    console.log(this.criptosVende);
    
  }
  public getUserData():void{
    this.email = JSON.parse(localStorage.getItem('user')).email;
    this.password = JSON.parse(localStorage.getItem('user')).password;
  }
  public getCriptosFromUser(): void {
    this.userService.getUsers().subscribe((response) => {
      response.forEach(user => {
        if (user.email === this.email && user.password === this.password) {
          if(user.vende !== []){
            user.vende.forEach(us => {
              let cripto: Cripto = {
                nombre: us.nombre,
                costoActual:us.costoActual,
                comision:us.comision,
                ano:us.ano
              }
              this.criptosVende.push(cripto)
            });
          }
        }
      });
    });
    console.log(this.criptosVende);
  }

}
