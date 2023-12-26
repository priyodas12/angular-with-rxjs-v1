import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-cancel-observable',
  templateUrl: './cancel-observable.component.html',
  styleUrls: ['./cancel-observable.component.css']
})
export class CancelObservableComponent {

  timer!: string;

  timerSubscriber!: Subscription;

  constructor() {

  }

  ngOnInit() {
    //1000ms interval for each object creation.predefined observable

    const observableWithInterval = interval(1000);


  }

  cancelOnClick() {
    console.log("cancelling Subscription!");
    this.timerSubscriber.unsubscribe();
  }

  startOnClick() {
    const observableWithInterval = interval(1000);
    this.timerSubscriber = observableWithInterval.subscribe({
      next: (data: number) => {
        this.timer = new Date().toLocaleTimeString()
        console.log(`observer-1 received at \n ${this.timer} at ${data}`)
      },
      error: (error: string) => console.log(error),
      complete: () => console.log("customObserver completed"),
    }
    )

  }


}
