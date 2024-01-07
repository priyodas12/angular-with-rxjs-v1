import { Component } from '@angular/core';
import { interval, take, timer, bufferWhen } from 'rxjs';
@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.css']
})
export class BufferWhenComponent {

  displayBufferWhen!: number[];

  displayError: any;

  status!: string;

  constructor() {

  }

  ngAfterViewInit() {
    // Create an observable that emits values every 500 milliseconds
    const sourceObservable = interval(500).pipe(take(20));

    // Create a notifier observable using timer
    const notifierObservable = timer(2000); // Start buffering after 2000 milliseconds

    // Use bufferWhen to collect values into arrays based on the notifier observable
    const bufferedObservable = sourceObservable.pipe(bufferWhen(() => notifierObservable));

    // Subscribe to the buffered observable to receive the arrays
    const subscription = bufferedObservable.subscribe(
      (bufferedValues) => {
        this.displayBufferWhen = bufferedValues;
        console.log('Buffered values:', bufferedValues);
      },
      (error) => {
        this.displayError = error;
        console.error('Error:', error);
      },
      () => {
        this.status = "completed";
        console.log('Complete');
      }
    );
  }

}
