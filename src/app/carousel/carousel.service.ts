import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  carouselImages = [
    //
    {
      id: 3,
      imgName: 'founder-phone',
      imgUrl: '../../assets/carousel_pics/founder_phone.JPG',
    },
    {
      id: 1,
      imgName: 'college-entrance',
      imgUrl: '../../assets/carousel_pics/main_college.jpeg',
    },
    {
      id: 2,
      imgName: 'classroom',
      imgUrl: '../../assets/carousel_pics/classroom.jpeg',
    },
    {
      id: 4,
      imgName: 'classroom2',
      imgUrl: '../../assets/carousel_pics/classroom2.jpeg',
    },
    {
      id: 5,
      imgName: 'college-front',
      imgUrl: '../../assets/carousel_pics/college-front.jpeg',
    },
    {
      id: 6,
      imgName: 'college2',
      imgUrl: '../../assets/carousel_pics/college2.jpeg',
    },
    {
      id: 7,
      imgName: 'library',
      imgUrl: '../../assets/carousel_pics/library.jpeg',
    },
    {
      id: 8,
      imgName: 'night-view',
      imgUrl: '../../assets/carousel_pics/night-view.jpeg',
    },
    {
      id: 9,
      imgName: 'advertise',
      imgUrl: '../../assets/carousel_pics/advertise.jpg',
    },
    {
      id: 10,
      imgName: 'night-view-2',
      imgUrl: '../../assets/carousel_pics/night-view-2.jpeg',
    },
    {
      id: 11,
      imgName: 'phone-banner-1',
      imgUrl: '../../assets/carousel_pics/phone-banner-1.jpeg',
    },
    {
      id: 12,
      imgName: 'phone-group-1',
      imgUrl: '../../assets/carousel_pics/phone-group-1.jpeg',
    },
    {
      id: 13,
      imgName: 'phone-group-2',
      imgUrl: '../../assets/carousel_pics/phone-group-2.jpeg',
    },
    {
      id: 14,
      imgName: 'phone-group-boys',
      imgUrl: '../../assets/carousel_pics/phone-group-boys.jpeg',
    },
  ];

  getCarouselImages() {
    return [...this.carouselImages];
  }

  constructor() {}
}
