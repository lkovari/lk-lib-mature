import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormValidationMonitorMatureComponent } from './form-validation-monitor-mature.component';

@NgModule({
  declarations: [FormValidationMonitorMatureComponent],
  imports: [
    FormsModule,    
    CommonModule
  ],
  exports: [FormValidationMonitorMatureComponent]
})
export class FormValidationMonitorMatureModule { }
