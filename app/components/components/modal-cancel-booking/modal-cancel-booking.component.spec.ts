import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelBookingComponent } from './modal-cancel-booking.component';

describe('ModalCancelBookingComponent', () => {
  let component: ModalCancelBookingComponent;
  let fixture: ComponentFixture<ModalCancelBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCancelBookingComponent]
    });
    fixture = TestBed.createComponent(ModalCancelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
