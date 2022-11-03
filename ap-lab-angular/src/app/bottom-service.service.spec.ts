import { TestBed } from '@angular/core/testing';

import { BottomServiceService } from './bottom-service.service';

describe('BottomServiceService', () => {
  let service: BottomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
