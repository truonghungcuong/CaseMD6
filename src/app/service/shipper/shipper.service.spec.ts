import { TestBed } from '@angular/core/testing';

import { ShipperService } from './shipper.service';

describe('ShipperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipperService = TestBed.get(ShipperService);
    expect(service).toBeTruthy();
  });
});
