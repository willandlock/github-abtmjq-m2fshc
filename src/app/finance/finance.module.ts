import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FinanceComponent],
  declarations: [FinanceComponent]
})
export class FinanceModule { }