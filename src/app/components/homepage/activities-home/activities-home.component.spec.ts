import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesHomeComponent } from './activities-home.component';

describe('ActivitiesHomeComponent', () => {
  let component: ActivitiesHomeComponent;
  let fixture: ComponentFixture<ActivitiesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesHomeComponent]
    });
    fixture = TestBed.createComponent(ActivitiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
