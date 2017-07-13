import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data-service';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})

export class TermComponent implements OnInit {
  private _dataService: DataService;

  constructor(private dataService: DataService) { 
    this._dataService = dataService;
  }

  ngOnInit() {
  }

  saveTerm(term){
    
    this._dataService.data['term'] = term.currentTarget.value;
    console.log(this._dataService);
  }

}
