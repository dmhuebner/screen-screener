import { TestBed } from '@angular/core/testing';

import { ScreenerService } from './screener.service';

describe('ScreenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenerService = TestBed.get(ScreenerService);
    expect(service).toBeTruthy();
  });
});
