import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamphletPopupComponent } from './pamphlet-popup.component';

describe('PamphletPopupComponent', () => {
  let component: PamphletPopupComponent;
  let fixture: ComponentFixture<PamphletPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PamphletPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PamphletPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
