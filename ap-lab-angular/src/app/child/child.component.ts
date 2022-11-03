import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() title!: string;
  @Output() childContent = new EventEmitter<{ title: string }>();

  constructor() {}

  heloFromChild(test: string) {
    this.childContent.emit({ title: test });
  }

  ngOnInit(): void {}
}
