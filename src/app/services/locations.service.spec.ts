import { TestBed } from '@angular/core/testing';

import { LocationsService } from './locations.service';

describe('CitiesService', () => {
  let service: LocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
