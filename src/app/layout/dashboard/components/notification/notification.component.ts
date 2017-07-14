import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data-service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit {

    constructor(public dataService: DataService,private _router: Router) { 

    }
    

   ngOnInit() {
        this._router.events.subscribe(event => {
            console.log(event);
            if (event instanceof NavigationEnd) {
                console.log(event.urlAfterRedirects);
                switch (event.urlAfterRedirects) {
                    case '/home': this.dataService.statusBar = {
                        welcome: true,
                        situation: false,
                        location: false,
                        income: false,
                        expenses: false,
                        concession: false,
                        actionplan: false
                    };
                    break;
                    case '/calculator': this.dataService.statusBar = {
                        welcome: true,
                        situation: true,
                        location: false,
                        income: false,
                        expenses: false,
                        concession: false,
                        actionplan: false
                    };
                    break;
                    case '/calculator/location': this.dataService.statusBar = {
                        welcome: true,
                        situation: true,
                        location: true,
                        income: false,
                        expenses: false,
                        concession: false,
                        actionplan: false
                    };
                    break;
                    case '/calculator/income': this.dataService.statusBar = {
                        welcome: true,
                        situation: true,
                        location: true,
                        income: true,
                        expenses: false,
                        concession: false,
                        actionplan: false
                    };
                    break;
                    case '/calculator/expense': this.dataService.statusBar = {
                        welcome: true,
                        situation: true,
                        location: true,
                        income: true,
                        expenses: true,
                        concession: false,
                        actionplan: false
                    };
                    break;
                    case '/calculator/concession': this.dataService.statusBar = {
                        welcome: true,
                        situation: true,
                        location: true,
                        income: true,
                        expenses: true,
                        concession: true,
                        actionplan: false
                    };
                    break;
                    case '/calculator/actionplan': this.dataService.statusBar = {
                        welcome: true,
                        situation: true,
                        location: true,
                        income: true,
                        expenses: true,
                        concession: true,
                        actionplan: true
                    };
                    break;
                    default:  this.dataService.statusBar = {
                        welcome: true,
                        situation: false,
                        location: false,
                        income: false,
                        expenses: false,
                        concession: false,
                        actionplan: false
                    };
                    break;
                }
            }
        });
    }


}
