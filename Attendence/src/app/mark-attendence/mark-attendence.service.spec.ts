import { TestBed } from '@angular/core/testing';

import { MarkAttendenceService } from './mark-attendence.service';

describe('MarkAttendenceService', () => {
  let service: MarkAttendenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkAttendenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
