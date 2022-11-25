import { TestBed } from '@angular/core/testing';

import { MainServicesService } from './main-services.service';

describe('MainServicesService', () => {
  let service: MainServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
