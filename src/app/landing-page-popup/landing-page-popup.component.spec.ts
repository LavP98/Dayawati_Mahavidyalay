import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagePopupComponent } from './landing-page-popup.component';

describe('LandingPagePopupComponent', () => {
  let component: LandingPagePopupComponent;
  let fixture: ComponentFixture<LandingPagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPagePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
