import { TestBed } from '@angular/core/testing';

import { PageChangerService } from './page-changer.service';

describe('PageChangerService', () => {
  let service: PageChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
