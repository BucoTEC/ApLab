import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopServiceService } from '../top-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() title!: string;
  @Output() childContent = new EventEmitter<{ title: string }>();

  constructor(private topService: TopServiceService) {}

  heloFromChild(test: string) {
    this.childContent.emit({ title: test });
  }

  testService() {
    this.topService.sayHello();
  }
  ngOnInit(): void {}
}
