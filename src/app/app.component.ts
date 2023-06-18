import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LandingPagePopupComponent } from './landing-page-popup/landing-page-popup.component';
import { AdmissionPagePopupComponent } from './landing-page-popup/admission-page-popup/admission-page-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dayawati';
  isViewMobile: boolean = false;
  displayScrollBtn: boolean = false;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.displayScrollBtn = true;
    } else {
      this.displayScrollBtn = false;
    }
  }
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.isViewMobile = this.detectMobile();
    let dialogRef = this.dialog.open(AdmissionPagePopupComponent, {
      width: '500px',
      disableClose: true,
    });
    setTimeout(() => {
      dialogRef.afterClosed().subscribe(() => {
        this.dialog.open(LandingPagePopupComponent, {
          width: '500px',
          disableClose: true,
        });
      });
    }, 3000);
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
    if (menuItem == 'quick-links') {
      if (!this.isViewMobile) {
        scroll(0, 1000);
      } else {
        scroll(0, 1300);
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
