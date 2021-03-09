import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormValidationMonitorMatureModule } from 'projects/form-validation-monitor-mature/src/lib/form-validation-monitor-mature.module';

import { AppComponent } from './app.component';
import { FirstCapitalCharCustomValidator } from './first-capital-char-custom.validator';

@NgModule({
  declarations: [
    AppComponent,
    FirstCapitalCharCustomValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule,
    FormValidationMonitorMatureModule
  ],
  providers: [FirstCapitalCharCustomValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
