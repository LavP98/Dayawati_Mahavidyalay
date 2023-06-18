import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingPagePopupService {
  autoScrollCarousel = new BehaviorSubject<any>(false);
  constructor() {}

  autoScrollCarouselBS(autoScrollCarousel: boolean) {
    this.autoScrollCarousel.next(autoScrollCarousel);
  }
}
