import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-popup',
  templateUrl: './landing-page-popup.component.html',
  styleUrls: ['./landing-page-popup.component.css'],
})
export class LandingPagePopupComponent implements OnInit {
  displayPopup: boolean = false;
  selectedLanguageEnglish = true;
  constructor() {}

  ngOnInit(): void {}

  changeLanguage() {
    this.selectedLanguageEnglish = !this.selectedLanguageEnglish;
  }
}
