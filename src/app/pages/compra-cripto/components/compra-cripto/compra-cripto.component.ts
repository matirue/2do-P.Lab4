import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Cripto } from 'src/app/shared/models/cripto';
import { User } from 'src/app/shared/models/user';
import { CriptoService } from 'src/app/shared/services/cripto.service';
import { UserService } from 'src/app/shared/services/user.service';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';

@Component({
  selector: 'app-compra-cripto',
  templateUrl: './compra-cripto.component.html',
  styleUrls: ['./compra-cripto.component.scss'],
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

export class CompraCriptoComponent implements OnInit {

  @Input('criptoInput') criptoInput:Cripto[] = [];
  criptosVende: Cripto[] = [];
  email:string;
  currentUser:User;
  users:User[] = [];
  dataToModal:any[] = [];
  filterData:any;
  password:string;
  mostrar_1: boolean = true;
  mostrar_2: boolean = false;

  constructor(
    private criptoService: CriptoService,
    private userService: UserService) {}

  ngOnInit(): void {
    this.getUserData();
    this.getSellers();
  }

  public getSeller(user:User){
    this.criptosVende = [];
    this.currentUser = user;
    this.getCriptosFromUser(this.currentUser.email);

    this.mostrar_1 = false;
    this.mostrar_2 = true;
  }

  public viewSeller(){
    this.mostrar_1 = true;
    this.mostrar_2 = false;
  }

  public getUserData():void{
    this.email = JSON.parse(localStorage.getItem('user')).email;
    this.password = JSON.parse(localStorage.getItem('user')).password;
  }

  public sendDataToModal(cripto:Cripto):void{
    this.dataToModal = [cripto,this.currentUser,JSON.parse(localStorage.getItem('user'))];
  }

  public getCriptosFromUser(emailFromSelect:any): void {
    this.userService.getUsers().subscribe((response) => {
      response.forEach(user => {
        if (user.email === emailFromSelect) {
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
  public getSellers():void{
    this.userService.getUsersWithID().subscribe(response => {
      response.forEach(res => {
        if (res.data().type === "Vendedor" && res.data().habilitado) {
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
        }
        
        
      })
      
    })
  }


}
