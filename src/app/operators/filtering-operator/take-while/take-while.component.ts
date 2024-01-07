import { Component } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { take, buffer, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css']
})
export class TakeWhileComponent {

  num: number[] = [];

  status: string = '';

  numberObservable$!: Observable<number>;

  eventObservable$!: Observable<number[]>;

  ngAfterViewInit() {
    const numbers = interval(100);
    this.numberObservable$ = numbers;

    const btn = document.getElementById('takeBtn');

    const clickEventObservable$ = fromEvent(btn!, 'click');

    this.eventObservable$ = this.numberObservable$.pipe(
      takeWhile(val => val < 100),
      buffer(clickEventObservable$)
    )

    this.eventObservable$.subscribe(
      data => { this.num = data },
      err => console.log(err),
      () => {
        this.status = "Completed"
        console.log('Completed')
      }
    )
  }

}
