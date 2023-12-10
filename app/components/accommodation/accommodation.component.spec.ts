import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationComponent } from './accommodation.component';

describe('AccomodationComponent', () => {
  let component: AccomodationComponent;
  let fixture: ComponentFixture<AccomodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationComponent]
    });
    fixture = TestBed.createComponent(AccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
