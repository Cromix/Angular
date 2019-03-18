import { TestBed } from '@angular/core/testing';

import { ServiciService } from './servici.service';

describe('ServiciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciService = TestBed.get(ServiciService);
    expect(service).toBeTruthy();
  });
});
