import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../../config/constants.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    private pathUrl = '';  // URL to web api

    constructor(public httpClient: HttpClient, public ConstantsService: ConstantsService) {
        this.pathUrl = this.ConstantsService.env().env.DOMAIN + this.ConstantsService.env().env.API_PATH;
    }

    all(url: string): Promise<any> {
        const path = this.pathUrl + url;
        return this.httpClient.get(this.pathUrl + url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    get(url: string, id: number): Promise<any> {
        const path = this.pathUrl + url + '/' + id;
        return this.httpClient.get(path)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    delete(url: string, id: number): Promise<void> {
        const path = this.pathUrl + url + '/' + id;
        return this.httpClient.delete(path)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    post(url: string, request: object): Promise<any> {
        const path = this.pathUrl + url;
        return this.httpClient
            .post(path, request)
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    put(url: string, request: object): Promise<any> {
        const path = this.pathUrl + url + '/';
        const id = (request['id']) ? request['id'] : '';
        return this.httpClient
            .put(path + id, JSON.stringify(request))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

