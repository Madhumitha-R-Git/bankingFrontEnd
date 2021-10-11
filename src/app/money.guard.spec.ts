import { TestBed } from '@angular/core/testing';

import { MoneyGuard } from './money.guard';

describe('MoneyGuard', () => {
  let guard: MoneyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MoneyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
