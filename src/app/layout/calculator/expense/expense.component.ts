import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data-service';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expensefrom : number;
  expenseto: number;

  constructor(private dataService: DataService) { 
    this.expensefrom = dataService.data.expensefrom;
    this.expenseto = dataService.data.expenseto;
  }

  ngOnInit() {
  }

  savePeriod(period){ 
    this.dataService.data['period'] = period.currentTarget.value;
  }

  saveExpense(){
    this.dataService.data['expensefrom'] = this.expensefrom;
    this.dataService.data['expenseto'] = this.expenseto;
    console.log(this.dataService);
  }

}
