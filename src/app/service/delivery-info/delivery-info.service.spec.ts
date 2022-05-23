import { TestBed } from '@angular/core/testing';

import { DeliveryInfoService } from './delivery-info.service';

describe('DeliveryInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryInfoService = TestBed.get(DeliveryInfoService);
    expect(service).toBeTruthy();
  });
});
