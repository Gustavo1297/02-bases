import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  <h1>{{title}}</h1>
<hr>
<h3>Counter {{counter}}</h3>

<button (click)="increasBy(+1)">+1</button>
<button (click)="resetCounter()">RESET</button>
<button (click)="increasBy(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }
  public title:string = 'SIPPSE';
  public counter:number =10;


  increasBy(value:number):void{
    this.counter +=value;
  }

  resetCounter(){
    this.counter=10
  }

  ngOnInit() { }
}
