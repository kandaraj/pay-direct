import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator.component';
import { TermComponent } from './term/term.component';
import { LocationComponent } from './location/location.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [
    { 
      path: '', component: CalculatorComponent,
      children: [
        {
          path: '', component: TermComponent
        },
        { 
          path: 'term', component: TermComponent 
        },
        { 
          path: 'location', component: LocationComponent 
        },
        { 
          path: 'income', component: IncomeComponent 
        },
        { 
          path: 'expense', component: ExpenseComponent 
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
