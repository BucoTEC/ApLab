import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BottomServiceService {
  constructor() {}

  bottomHy() {
    console.log('Hello from bottom service');
  }
}
