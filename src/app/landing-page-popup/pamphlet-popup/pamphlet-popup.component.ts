import { Component, OnInit } from '@angular/core';
import { LandingPagePopupService } from '../landing-page-popup.service';

@Component({
  selector: 'app-pamphlet-popup',
  templateUrl: './pamphlet-popup.component.html',
  styleUrls: ['./pamphlet-popup.component.css'],
})
export class PamphletPopupComponent implements OnInit {
  selectedLanguageEnglish = true;
  pamphletUrl = 'assets/pamphlet/college_pamphlet.jpeg';
  constructor(private landingPagePopupService: LandingPagePopupService) {}

  ngOnInit(): void {}

  changeLanguage() {
    this.selectedLanguageEnglish = !this.selectedLanguageEnglish;
  }

  onLandingPagePopupClose() {
    this.landingPagePopupService.autoScrollCarouselBS(true);
  }
}
