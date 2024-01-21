import { TestBed } from '@angular/core/testing';

import { TransDateService } from './trans-date.service';

describe('TransDateService', () => {
  let service: TransDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
