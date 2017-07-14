import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data-service';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})

export class TermComponent implements OnInit {
  private _dataService: DataService;
  range : number;

  constructor(private dataService: DataService) { 
    this._dataService = dataService;
  }

  ngOnInit() {
  }

  saveTerm(){
    var term : string;
    term = "long";

    if(this.range == 1){
      term = "short"
    }
    this._dataService.data['term'] = term; 
    console.log(this._dataService);
  }

}
