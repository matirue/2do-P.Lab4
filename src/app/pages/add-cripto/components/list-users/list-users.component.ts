import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
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
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  filterData: any;

  @ViewChild('select') select: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  ngAfterViewInit() {
    this.filterData = this.select.nativeElement.value;
  }

  public valueSelect(): void {
    this.filterData = this.select.nativeElement.value;
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
