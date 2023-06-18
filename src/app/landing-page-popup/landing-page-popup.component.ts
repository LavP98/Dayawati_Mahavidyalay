import { Component, OnInit } from '@angular/core';
import { LandingPagePopupService } from './landing-page-popup.service';

@Component({
  selector: 'app-landing-page-popup',
  templateUrl: './landing-page-popup.component.html',
  styleUrls: ['./landing-page-popup.component.css'],
})
export class LandingPagePopupComponent implements OnInit {
  displayPopup: boolean = false;
  selectedLanguageEnglish = true;
  constructor(private landingPagePopupService: LandingPagePopupService) {}

  ngOnInit(): void {}

  changeLanguage() {
    this.selectedLanguageEnglish = !this.selectedLanguageEnglish;
  }

  onLandingPagePopupClose() {
    this.landingPagePopupService.autoScrollCarouselBS(true);
  }
}
