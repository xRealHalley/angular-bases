import { Component } from '@angular/core';

@Component({
  selector: 'app-counter2',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(-10)">-10</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(+10)">+10</button>

  `
})
export class CounterComponent2  {
  public counter: number = 0;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
