import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showHide() {
    if(this.show){
      this.show = false;
    }else{
      this.show = true;
    }
  }

}
