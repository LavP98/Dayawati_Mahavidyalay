import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LandingPagePopupComponent } from './landing-page-popup/landing-page-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dayawati';

  isViewMobile: boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.isViewMobile = this.detectMobile();
    let dialogRef = this.dialog.open(LandingPagePopupComponent, {
      width: '500px',
      disableClose: true,
    });
    dialogRef.componentInstance.displayPopup = true;
  }

  navMenuItemClicked(menuItem: string) {
    if (menuItem == 'contact_us') {
      window.scrollTo(0, document.body.scrollHeight);
    }
    if (menuItem == 'courses') {
      if (!this.isViewMobile) {
        scroll(0, 700);
      } else {
        scroll(0, 900);
      }
    }
  }

  detectMobile() {
    const isMobile = window.matchMedia(
      'only screen and (max-width: 912px)'
    ).matches;
    return isMobile;
  }
}
