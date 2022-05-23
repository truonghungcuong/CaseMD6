import { TestBed } from '@angular/core/testing';

import { ShipperRegisterService } from './shipper-register.service';

describe('ShipperRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipperRegisterService = TestBed.get(ShipperRegisterService);
    expect(service).toBeTruthy();
  });
});
