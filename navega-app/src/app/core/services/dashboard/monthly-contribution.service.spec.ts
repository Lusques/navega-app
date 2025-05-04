import { TestBed } from '@angular/core/testing';

import { MonthlyContributionService } from './monthly-contribution.service';

describe('MonthlyContributionService', () => {
  let service: MonthlyContributionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyContributionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
