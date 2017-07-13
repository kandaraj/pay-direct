import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { TermComponent } from './term/term.component';
import { DataService } from '../../shared/services/data-service';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  declarations: [CalculatorComponent, TermComponent],
  providers: [DataService]
})
export class CalculatorModule { }
