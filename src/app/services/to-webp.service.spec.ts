import { TestBed } from '@angular/core/testing';

import { ToWebpService } from './to-webp.service';

describe('ToWebpService', () => {
  let service: ToWebpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToWebpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
