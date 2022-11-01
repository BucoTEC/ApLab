import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css'],
})
export class TestButtonComponent implements OnInit {
  @Input() test?: string;
  @Output() childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  buttonEvent() {
    this.childEvent.emit('Sta ima iz buttona');
  }
}
