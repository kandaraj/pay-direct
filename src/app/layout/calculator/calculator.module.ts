import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  declarations: [CalculatorComponent]
})
export class CalculatorModule { }
