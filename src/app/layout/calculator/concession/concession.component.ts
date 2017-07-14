import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data-service';


@Component({
  selector: 'app-concession',
  templateUrl: './concession.component.html',
  styleUrls: ['./concession.component.scss']
})
export class ConcessionComponent implements OnInit {

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
  }

  saveConcession(concession){ 
    this.dataService.data['concession'] = concession.currentTarget.value;
    console.log(this.dataService.data);
  }


}
