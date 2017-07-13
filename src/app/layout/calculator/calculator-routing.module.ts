import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator.component';
import { TermComponent } from './term/term.component';
import { LocationComponent } from './location/location.component';

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
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
