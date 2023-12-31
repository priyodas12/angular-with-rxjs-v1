import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent {

  displayBufferValues!: number[];

  bufferTimeDisplay: number = 1000;

  ngAfterViewInit() {

    // Create an observable that emits values every 400 milliseconds
    const sourceObservable$ = interval(400).pipe(take(24)); // Emit 100 values for the example

    // Use bufferTime to collect values into arrays every 1000 milliseconds (1 second)
    const bufferedObservable$ = sourceObservable$.pipe(bufferTime(this.bufferTimeDisplay));

    // Subscribe to the buffered observable to receive the arrays
    const subscription = bufferedObservable$.subscribe(
      (bufferedValues) => {
        this.displayBufferValues = bufferedValues;
        console.log('Buffered values:', bufferedValues);
      },
      (error) => {
        console.error('Error:', error);
      },
      () => {
        console.log('Completed');
      }
    );

  }

}
