import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, state, animation } from '@angular/animations';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
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
export class ErrorComponent implements OnInit {
  constructor(private routes: Router) {}

  ngOnInit(): void {}
  public redirect(): void {
    this.routes.navigate(['login']);
  }
}
