import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
