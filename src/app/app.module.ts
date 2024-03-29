import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavBarComponent } from './carousel/nav-bar/nav-bar.component';
import { LandingPagePopupComponent } from './landing-page-popup/landing-page-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollTopBtnComponent } from './scroll-top-btn/scroll-top-btn.component';
import { AdmissionPagePopupComponent } from './landing-page-popup/admission-page-popup/admission-page-popup.component';
import { PamphletPopupComponent } from './landing-page-popup/pamphlet-popup/pamphlet-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CarouselComponent,
    CardsComponent,
    CoursesComponent,
    ContactUsComponent,
    NavBarComponent,
    LandingPagePopupComponent,
    QuickLinksComponent,
    ScrollTopBtnComponent,
    AdmissionPagePopupComponent,
    PamphletPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
