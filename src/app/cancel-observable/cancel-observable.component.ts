import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

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

    //const observableWithInterval = interval(1000);

    //custom observable with setTimer
    const customObservable1 = new Observable(
      observer => {
        let i = 0;
        let interval = setInterval(() => {
          console.log("Interval Time");
          // if (i === 7) {
          //   observer.error("unwanted error raised")
          // }
          observer.next(i++);
        }, 1000)

        //clearing interval context
        return () => {
          console.log(interval);
          console.log("called while unsubscribed!");
          clearInterval(interval);
        }
      }

    );
    this.timerSubscriber = customObservable1.subscribe((data) => {
      this.timer = new Date().toLocaleTimeString();
      console.log(new Date().toLocaleTimeString() + " > " + data);
    })

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
