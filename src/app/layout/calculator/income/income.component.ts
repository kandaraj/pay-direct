import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data-service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  incomefrom : number;
  incometo: number;
  income:number;

  constructor(private dataService: DataService) { 
    this.incomefrom = dataService.data.incomefrom;
    this.incometo = dataService.data.incometo;
  }

  ngOnInit() {
  }

  saveIncome(){
    this.dataService.data['incomefrom'] = this.incomefrom;
    this.dataService.data['incometo'] = this.incometo;
    console.log(this.dataService);
  }

}
