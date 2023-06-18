import { Component, OnInit } from '@angular/core';
import { LandingPagePopupService } from '../landing-page-popup.service';

@Component({
  selector: 'app-admission-page-popup',
  templateUrl: './admission-page-popup.component.html',
  styleUrls: ['./admission-page-popup.component.css'],
})
export class AdmissionPagePopupComponent implements OnInit {
  selectedLanguageEnglish = true;
  constructor(private landingPagePopupService: LandingPagePopupService) {}

  ngOnInit(): void {}

  changeLanguage() {
    this.selectedLanguageEnglish = !this.selectedLanguageEnglish;
  }

  onLandingPagePopupClose() {
    this.landingPagePopupService.autoScrollCarouselBS(false);
  }
}
