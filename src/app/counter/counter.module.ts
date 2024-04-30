import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { CounterComponent2 } from './components/counter2/counter2.component';


@NgModule({
  declarations: [
    CounterComponent,
    CounterComponent2
  ],
  exports: [
    CounterComponent,
    CounterComponent2
  ]
})
export class CounterModule {}
