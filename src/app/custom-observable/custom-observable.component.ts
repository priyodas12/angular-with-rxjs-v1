import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent {

  constructor() {

  }
  ngOnInit() {
    let customObservable = new Observable<number>((observer) => {
      for (let index = 0; index < 5; index++) {
        observer.next(index)
      }
      //observer.error("on error");
      observer.complete();
    });

    let customObserver = {
      next: (data: number) => console.log("observer-1: " + data),
      error: (error: string) => console.log(error),
      complete: () => console.log("customObserver completed"),
    }

    customObservable.subscribe(customObserver);

    customObservable.subscribe(
      (data) => console.log("observer-2: " + data),
      (error) => console.log("observer-2: " + error),
      () => console.log("observer - 2: completed")
    )
  }


}
