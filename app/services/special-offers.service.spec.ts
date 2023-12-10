import { TestBed } from '@angular/core/testing';

import { SpecialOffersService } from './special-offers.service';

describe('SpecialOffersService', () => {
  let service: SpecialOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
