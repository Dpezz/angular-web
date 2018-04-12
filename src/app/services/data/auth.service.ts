import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from '../base/data.service';

// const helper = new JwtHelperService();

@Injectable()
export class AuthService {

    // user: string;


    constructor(
        public httpClient: HttpClient,
        public jwtHelper: JwtHelperService,
        private router: Router,
        public dataService: DataService
    ) { }

    login(auth) {
        let datos = { email: auth.username, password: auth.password };
        return this.dataService.post('auth', datos)
            .then(response => response)
            .catch(this.handleError);
    }

    show() {
        return this.dataService.all('auth')
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response));
                this.router.navigate(['dashboard']);
            })
            .catch(this.handleError);
    }

    // tokenSubscription() {
    //     this.authHttp.tokenStream.subscribe(
    //         data => console.log(data),
    //         err => console.log(err),
    //         () => console.log('Complete')
    //     );
    // }

    // useJwtHelper() {
    //     var token = localStorage.getItem('token');
    //     console.log(
    //         this.jwtHelper.decodeToken(token),
    //         this.jwtHelper.getTokenExpirationDate(token),
    //         this.jwtHelper.isTokenExpired(token)
    //     );
    // }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
        console.log('close session - ' + Date());
    }

    loggedIn() {
        return !this.jwtHelper.isTokenExpired();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}



