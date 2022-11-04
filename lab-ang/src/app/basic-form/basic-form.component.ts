import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  userForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(),
    });
  }
  onSubmit() {
    console.log(this.userForm);
  }
}
