import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  carouselImages = [
    {
      id: 3,
      imgName: 'founder-phone',
      imgUrl: '../../assets/carousel_pics/founder_phone.JPG',
    },
    {
      id: 1,
      imgName: 'college-entrance',
      imgUrl: '/assets/carousel_pics/main_college.jpeg',
    },
    {
      id: 2,
      imgName: 'classroom',
      imgUrl: '../../assets/carousel_pics/classroom.jpeg',
    },
  ];

  getCarouselImages() {
    return [...this.carouselImages];
  }

  constructor() {}
}
