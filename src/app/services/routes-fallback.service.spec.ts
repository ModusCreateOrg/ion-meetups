import { TestBed, inject } from '@angular/core/testing';

import { RoutesFallbackService } from './routes-fallback.service';

describe('RoutesFallbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesFallbackService]
    });
  });

  it('should be created', inject([RoutesFallbackService], (service: RoutesFallbackService) => {
    expect(service).toBeTruthy();
  }));
});
