import { TestBed } from '@angular/core/testing';

import { JeriSchoolService } from './jeri-school.service';

describe('JeriSchoolService', () => {
  let service: JeriSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeriSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
