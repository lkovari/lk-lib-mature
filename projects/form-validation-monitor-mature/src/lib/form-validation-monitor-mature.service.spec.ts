import { TestBed } from '@angular/core/testing';

import { FormValidationMonitorMatureService } from './form-validation-monitor-mature.service';

describe('FormValidationMonitorMatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormValidationMonitorMatureService = TestBed.get(FormValidationMonitorMatureService);
    expect(service).toBeTruthy();
  });
});
