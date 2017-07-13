import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { TermComponent } from './term/term.component';
import { DataService } from '../../shared/services/data-service';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule
  ],
  declarations: [CalculatorComponent, TermComponent, LocationComponent],
  providers: [DataService]
})
export class CalculatorModule { }
