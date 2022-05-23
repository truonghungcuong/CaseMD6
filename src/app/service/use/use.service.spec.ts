import { TestBed } from '@angular/core/testing';

import { UseService } from './use.service';

describe('UseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseService = TestBed.get(UseService);
    expect(service).toBeTruthy();
  });
});
