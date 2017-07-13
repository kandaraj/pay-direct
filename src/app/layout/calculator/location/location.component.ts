import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data-service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})


export class LocationComponent implements OnInit {

  postcode : string;

  constructor(private dataService: DataService) { 
    this.postcode = dataService.data.postcode;
  }

  ngOnInit() {
  }

  saveLocation(){
    this.dataService.data['postcode'] = this.postcode;
    console.log(this.dataService);
  }

}
