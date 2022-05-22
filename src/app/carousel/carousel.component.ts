import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { CarouselModel } from './carouselModel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  carouselImages: CarouselModel[] = [];
  currentlyActiveImg: any = {
    id: 1,
    imgName: 'college-entrance',
    imgUrl: '../../assets/carousel_pics/main_college.jpeg',
  };

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carouselImages = this.carouselService.getCarouselImages();
  }

  forwardBtnPressed(id: number) {
    if (id == this.carouselImages.length) {
      return;
    }
    let updatedId = id + 1;
    this.currentlyActiveImg = this.carouselImages.find(
      (img) => img.id == updatedId
    );
    console.log(this.currentlyActiveImg);
  }
  //backBtnPressed forwardBtnPressed

  backBtnPressed(id: number) {
    if (id == 0) {
      return;
    }
    let updatedId = id - 1;
    this.currentlyActiveImg = this.carouselImages.find(
      (img) => img.id == updatedId
    );
  }
}
