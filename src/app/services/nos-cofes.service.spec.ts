import { TestBed } from '@angular/core/testing';

import { NosCofesService } from './nos-cofes.service';

describe('NosCofesService', () => {
  let service: NosCofesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NosCofesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
