import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse',
  exportAs: 'mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit {

  private _state = { x: 0, y: 0 };
  get state() {
    return this._state;
  };
  constructor() { }

  ngOnInit(): void {
  }

  handleMouseMove(event) {
    this._state = {
      x: event.clientX,
      y: event.clientY
    };
  }
}
