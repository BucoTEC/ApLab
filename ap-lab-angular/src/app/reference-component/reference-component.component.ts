import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reference-component',
  templateUrl: './reference-component.component.html',
  styleUrls: ['./reference-component.component.scss'],
})
export class ReferenceComponentComponent implements OnInit {
  @ViewChild('glavniTag', { static: true }) comp: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.comp);
  }

  conponentData(data: any) {
    console.log(data);
  }
}
