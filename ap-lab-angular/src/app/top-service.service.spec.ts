import { TestBed } from '@angular/core/testing';

import { TopServiceService } from './top-service.service';

describe('TopServiceService', () => {
  let service: TopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
