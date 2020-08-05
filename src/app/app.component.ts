import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  number = 0;
  odds = new Array<Number>();
  evens = new Array<Number>();

  counterUpdate(gameControl) {
    this.number = gameControl.number;
    if(this.number % 2 === 0)
      this.evens.push(this.number);
    else
      this.odds.push(this.number);
  }
}
