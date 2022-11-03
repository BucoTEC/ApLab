import { Injectable } from '@angular/core';
import { BottomServiceService } from './bottom-service.service';

@Injectable({
  providedIn: 'root',
})
export class TopServiceService {
  constructor(private bottomServie: BottomServiceService) {}

  sayHello() {
    this.bottomServie.bottomHy();
    console.log('hello from top service');
  }
}
