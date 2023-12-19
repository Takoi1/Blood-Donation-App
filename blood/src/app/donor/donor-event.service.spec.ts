import { TestBed } from '@angular/core/testing';

import { DonorEventService } from './donor-event.service';

describe('DonorEventService', () => {
  let service: DonorEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
