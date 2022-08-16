import { TestBed } from '@angular/core/testing';

import { ServiceDisruptionsService } from './service-disruptions.service';

describe('ServiceDisruptionsService', () => {
  let service: ServiceDisruptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDisruptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
