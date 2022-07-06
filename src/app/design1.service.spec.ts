import { TestBed } from '@angular/core/testing';

import { Design1Service } from './design1.service';

describe('Design1Service', () => {
  let service: Design1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Design1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
