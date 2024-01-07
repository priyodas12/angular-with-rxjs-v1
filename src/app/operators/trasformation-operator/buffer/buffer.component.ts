import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Observable, Subscription, buffer, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent {

  numbers!: number[];

  clickEventSubscription!: Subscription;

  clickEventObservervable$!: Observable<number[]>;


  constructor() { }

  ngAfterViewInit() {

    const btn = document.getElementById('bufferClick');

    const clickEventObservable$ = fromEvent(btn!, 'click');

    const randomNumberObservable$ = interval(1000);

    this.clickEventObservervable$ = randomNumberObservable$.pipe(
      buffer(clickEventObservable$)
    )

    this.clickEventSubscription = this.clickEventObservervable$.subscribe(clickData => {
      this.numbers = clickData;
      console.log('ngAfterViewInit >> Numbers to Consume >> ', clickData);
    })

  }

  cancelOnClick() {
    console.log("Unsubscribed Button clicked!!");
    this.clickEventSubscription.unsubscribe();
  }

  startOnClick() {
    console.log("Subscription Button clicked!!");
    this.clickEventObservervable$.subscribe(clickData => {
      this.numbers = clickData;
      console.log('startOnClick >> Numbers to Consume >> ', clickData);
    })
  }

  
}
