import { Component } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { take, buffer } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent {

  num: number[] = [];

  numberObservable$!: Observable<number>;

  eventObservable$!: Observable<number[]>;

  ngAfterViewInit() {
    const numbers = interval(1000);
    this.numberObservable$ = numbers;

    const btn = document.getElementById('takeBtn');

    const clickEventObservable$ = fromEvent(btn!, 'click');

    this.eventObservable$ = this.numberObservable$.pipe(
      take(20),
      buffer(clickEventObservable$)
    )

    this.eventObservable$.subscribe(data => {
      this.num = data;
    })
  }
}
