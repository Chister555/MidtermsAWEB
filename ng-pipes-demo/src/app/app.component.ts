import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date(); 
  time$ = interval(1000).pipe(map(()=> new Date()))

  testObject = {
    name: " Chester Cruz",
    age: 20,
    food: "Ice Cream Yummy!"
  }

  testArray = [1,2,3,4,5]

  price:number=2000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];


  //decimalPipe
  decimalNum1 : number = 8.7589623;
  decimalNum2 : number = 5.43;
}
