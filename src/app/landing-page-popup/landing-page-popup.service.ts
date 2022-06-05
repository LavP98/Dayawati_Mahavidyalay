import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingPagePopupService {
  landingPagePopupClosed = new BehaviorSubject<any>(false);
  constructor() {}

  landingPagePopupBS() {
    this.landingPagePopupClosed.next('true');
  }
}
