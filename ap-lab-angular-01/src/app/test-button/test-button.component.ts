import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css'],
})
export class TestButtonComponent implements OnInit {
  @Input() test?: string;
  @Output() childEvent = new EventEmitter();
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  onReset() {
    this.name = '';
  }

  buttonEvent() {
    this.childEvent.emit('Sta ima iz buttona');
  }
}
