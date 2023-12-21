import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  templateUrl: './rxjs-basic.component.html',
  styleUrls: ['./rxjs-basic.component.css']
})
export class RxjsBasicComponent {

  title: string = "rxjs-basics";

  moviesRepo = [
    { title: "The Rock", rating: 7.6 },
    { title: "The Stone", rating: 6.9 },
    { title: "The Oscen", rating: 7.3 },
    null,
    { title: "The Bricks", rating: 3.1 }
  ]

  moviesRepoObserable$ = from(this.moviesRepo);

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolving this promise");
    }, 5000);
  });

  promiseObservable$ = from(this.promise);

  constructor() {
    console.log(this.moviesRepoObserable$);
    this.moviesRepoObserable$.subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
      complete: () => console.log("completed")
    });

    this.promiseObservable$.subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
      complete: () => console.log("completed promise")
    });

  }

  ngAfterContentInit() {
    fromEvent(document.querySelector('.click-me')!, 'click').subscribe({
      next: data => console.log(data),
      error: error => console.log(error),
      complete: () => console.log("completed event")
    });
  }

}
