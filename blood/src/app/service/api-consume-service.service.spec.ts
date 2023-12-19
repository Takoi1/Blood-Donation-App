import { TestBed } from '@angular/core/testing';

import { ApiConsumeServiceService } from './api-consume-service.service';

describe('ApiConsumeServiceService', () => {
  let service: ApiConsumeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConsumeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
