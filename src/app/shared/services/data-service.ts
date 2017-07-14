import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    public data : any = {
        term: 'short',
        postcode: '3000',
        incomefrom: '',
        incometo: ''
    };

    public statusBar: any = {
        welcome: true,
        situation: false,
        location: false,
        income: false,
        expenses: false,
        concession: false,
        actionplan: false
    };

    constructor(){}

}