import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';

@Component({
  selector: 'app-anable-vendedor',
  templateUrl: './anable-vendedor.component.html',
  styleUrls: ['./anable-vendedor.component.scss'],
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

export class AnableVendedorComponent implements OnInit {
  
  users:User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsersWithID().subscribe((response) => {
      response.forEach((res) => {
        if (res.data().type === "Vendedor") {
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
      });
    });
  }
  public enableValue(e:any, user:User):void{
    if(e.target.checked){
      this.userService.updateEnable(user.id,true);
    }else{
      this.userService.updateEnable(user.id,false);
    }
  }

}
