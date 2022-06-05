import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LandingPagePopupService } from '../landing-page-popup/landing-page-popup.service';
import { CarouselService } from './carousel.service';
import { CarouselModel } from './carouselModel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() isViewMobile: boolean = false;
  @Output() navBtnClicked = new EventEmitter();

  carouselImages: CarouselModel[] = [];
  currentlyActiveImg: any = {
    id: 1,
    imgName: 'college-entrance',
    imgUrl: 'assets/carousel_pics/main_college.jpeg',
  };

  constructor(
    private carouselService: CarouselService,
    private landingPagePopupService: LandingPagePopupService
  ) {}

  ngOnInit(): void {
    this.carouselImages = this.carouselService.getCarouselImages();
    this.landingPagePopupService.landingPagePopupClosed.subscribe((status) => {
      if (status == 'true') {
        setInterval(() => {
          //Math.floor(Math.random() * (max - min + 1) + min)
          let random = Math.floor(
            Math.random() * (this.carouselImages.length - 1 - 0 + 1) + 0
          );
          this.forwardBtnPressed(random);
        }, 2000);
      }
    });
  }

  forwardBtnPressed(id: number) {
    if (id == this.carouselImages.length) {
      return;
    }
    let updatedId = id + 1;
    this.currentlyActiveImg = this.carouselImages.find(
      (img) => img.id == updatedId
    );
  }
  //backBtnPressed forwardBtnPressed

  backBtnPressed(id: number) {
    console.log(id, 'id');
    if (id == 0) {
      return;
    }
    let updatedId = id - 1;
    this.currentlyActiveImg = this.carouselImages.find(
      (img) => img.id == updatedId
    );
  }

  navMenuItemClicked(menuItem: string) {
    this.navBtnClicked.emit(menuItem);
  }
}
