import { Component } from '@angular/core';
import { filter, interval, of,map } from 'rxjs';

@Component({
  selector: 'app-operator-basics',
  templateUrl: './operator-basics.component.html',
  styleUrls: ['./operator-basics.component.css']
})
export class OperatorBasicsComponent {

  numToDisplay!: string;

  constructor() { }

  ngOnInit() {

    const numberObservable = interval(1000);
    //of(1, 2, 3, 4, 5, 6, 7);

    numberObservable
      .pipe(
        filter(number => {
          return number % 2 === 0;
        }),
      map(
        number => {
          return "even number: " + number
        }
        )
      ).subscribe(number => {
        this.numToDisplay = number;
        console.log("Even Number: " + number);
      });

    // numberObservable.subscribe(number => {
    //   this.numToDisplay = number;
    //   console.log(number);
    // })

  }

}
