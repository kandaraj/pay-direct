import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data-service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit {

    constructor(private dataService: DataService) { 

    }

    ngOnInit() {

    }

}
