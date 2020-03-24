import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h4>Example application with multiple modules</h4>
    <payroll-search></payroll-search>
    <hr-files-search></hr-files-search>
    <app-finance></app-finance>
  `
})
export class AppComponent {}
