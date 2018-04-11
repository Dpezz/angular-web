import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DataService } from '../base/data.service';

@Injectable()
export class UserService {
    constructor(public DataService: DataService) {
    }

    // all() {
    //     return this.DataService.all('usuarios')
    //         .then(response => response)
    //         .catch(this.handleError);
    // }

    // get(item: any) {
    //     return this.DataService.get('usuarios', item.id)
    //         .then(response => response)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}



