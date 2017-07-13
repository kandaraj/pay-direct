import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { TermComponent } from './term/term.component';
import { DataService } from '../../shared/services/data-service';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule
  ],
  declarations: [CalculatorComponent, TermComponent, LocationComponent, IncomeComponent, ExpenseComponent],
  providers: [DataService]
})
export class CalculatorModule { }
