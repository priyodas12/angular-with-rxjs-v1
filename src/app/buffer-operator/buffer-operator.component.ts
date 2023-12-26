import { Component } from '@angular/core';
import { fromEvent, interval, buffer, map, bufferCount } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css']
})
export class BufferOperatorComponent {

  listOfUUID: string[] = [];

  ngAfterViewInit() {

    // Get a reference to the button element
    const btn = document.getElementById('clickButton');
    const bufferCountBtn = document.getElementById('take-3');

    const clickObservable$ = fromEvent(btn!, 'click');

    const clickForThreeValue$ = fromEvent(bufferCountBtn!, 'click');

    const source1$ = interval(2700);
    const source2$ = interval(700);

    const uuidObservable1$ = source1$.pipe(
      map(() => crypto.randomUUID())
    );

    const uuidObservable2$ = source2$.pipe(
      map(() => crypto.randomUUID())
    );

    const buffered$ = uuidObservable1$.pipe(
      buffer(clickObservable$)
    );

    const bufferCount$ = uuidObservable2$.pipe(
      //buffer(clickForThreeValue$),
      bufferCount(3, 2)
    );

    buffered$.subscribe(bufferedValues => {
      this.listOfUUID = bufferedValues;
      console.log(`Buffered Values: ${bufferedValues}`);
    });

    bufferCount$.subscribe(bufferedValues => {
      console.log(`3 Buffered Values: ${bufferedValues}`);
    });

  }
}
