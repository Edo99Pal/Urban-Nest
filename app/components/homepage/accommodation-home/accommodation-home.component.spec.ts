import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationHomeComponent } from './accommodation-home.component';

describe('AccomodationHomeComponent', () => {
  let component: AccomodationHomeComponent;
  let fixture: ComponentFixture<AccomodationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationHomeComponent]
    });
    fixture = TestBed.createComponent(AccomodationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
