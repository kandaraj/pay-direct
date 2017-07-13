import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    public data : any = {
        term: 'short',
        postcode: '3000',
        incomefrom: '',
        incometo: ''
    };

    constructor(){}

}