import { TestBed } from '@angular/core/testing';

import { InquireService } from './inquire.service';

describe('InquireService', () => {
  let service: InquireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
