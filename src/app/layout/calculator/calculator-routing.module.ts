import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator.component';
import { TermComponent } from './term/term.component';

const routes: Routes = [
    { 
      path: '', component: CalculatorComponent,
      children: [
        {
          path: '', component: TermComponent
        },
        { 
          path: 'term', component: TermComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
