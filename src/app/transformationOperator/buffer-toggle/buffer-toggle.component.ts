import { Component } from '@angular/core';
import { interval, take, fromEvent, bufferToggle } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
  styleUrls: ['./buffer-toggle.component.css']
})
export class BufferToggleComponent {

  displayBufferToggleValues!: number[];

  ngAfterViewInit() {

    const start = document.getElementById('start');

    const end = document.getElementById('end');

    // Create an observable that emits values every 500ms
    const source = interval(500);

    // Create an observable to open and close buffers
    const opening = fromEvent(start!, 'click');
    const closingSelector = () => fromEvent(end!, 'click');

    // Use bufferToggle to collect values between opening and closing events
    const buffered = source.pipe(bufferToggle(opening, closingSelector));

    // Subscribe to the buffered observable
    buffered.subscribe(buffer => {
      this.displayBufferToggleValues = buffer;
      console.log('Buffered values:', buffer);
    });
  }

}
