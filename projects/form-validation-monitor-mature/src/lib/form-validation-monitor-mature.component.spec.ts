import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationMonitorMatureComponent } from './form-validation-monitor-mature.component';

describe('FormValidationMonitorMatureComponent', () => {
  let component: FormValidationMonitorMatureComponent;
  let fixture: ComponentFixture<FormValidationMonitorMatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationMonitorMatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationMonitorMatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
