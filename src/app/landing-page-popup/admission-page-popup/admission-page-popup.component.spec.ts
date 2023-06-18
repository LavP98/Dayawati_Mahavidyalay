import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionPagePopupComponent } from './admission-page-popup.component';

describe('AdmissionPagePopupComponent', () => {
  let component: AdmissionPagePopupComponent;
  let fixture: ComponentFixture<AdmissionPagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionPagePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionPagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
