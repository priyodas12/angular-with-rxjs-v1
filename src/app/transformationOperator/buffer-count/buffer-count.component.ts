import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { bufferCount, take } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.css']
})
export class BufferCountComponent {

  displayBufferedValues!: number[];

  ngAfterViewInit() {
    // Create an observable that emits numbers every 500 milliseconds
    const sourceObservable = interval(500);//.pipe(take(10)); // Emit 10 numbers for the example

    // Use bufferCount to collect numbers into arrays of size 3
    const bufferedObservable$ = sourceObservable.pipe(bufferCount(3));

    // Subscribe to the buffered observable to receive the arrays
    const subscription = bufferedObservable$.subscribe(
      (bufferedValues) => {
        this.displayBufferedValues = bufferedValues;
        console.log('Buffered values:', bufferedValues);
      },
      (error) => {
        console.error('Error:', error);
      },
      () => {
        console.log('Complete');
      }
    );
  }

}
