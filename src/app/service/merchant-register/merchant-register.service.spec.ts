import { TestBed } from '@angular/core/testing';

import { MerchantRegisterService } from './merchant-register.service';

describe('MerchantRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchantRegisterService = TestBed.get(MerchantRegisterService);
    expect(service).toBeTruthy();
  });
});
