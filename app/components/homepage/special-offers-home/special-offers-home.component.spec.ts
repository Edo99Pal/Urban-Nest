import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffersHomeComponent } from './special-offers-home.component';

describe('SpecialOffersHomeComponent', () => {
  let component: SpecialOffersHomeComponent;
  let fixture: ComponentFixture<SpecialOffersHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialOffersHomeComponent]
    });
    fixture = TestBed.createComponent(SpecialOffersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
