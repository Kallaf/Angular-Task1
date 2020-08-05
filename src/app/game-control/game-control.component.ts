import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  number = 0;
  interval;
  @Output() update = new EventEmitter<any>();
  onClickStart()
  {
    if(!this.interval)
    {
      this.interval = setInterval(() => { 
        this.number++;
        this.update.emit({
          number: this.number
        });
      }, 1000);
    }
  }
  onClickStop()
  {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
