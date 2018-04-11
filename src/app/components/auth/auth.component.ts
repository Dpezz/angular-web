import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/data/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: '../../views/auth/auth.component.html',
})

export class AuthComponent {

    title = 'Login';
    auth = {};
    error = null;

    constructor(private AuthService: AuthService, private router: Router) {
        this.auth = { 'username': null, 'password': null };
    }

    login() {
        this.AuthService.login(this.auth)
            .then(response => {
                this.AuthService.show();
            }).catch(error => {
                this.error = 'User or Password incorrect!';
            });
    }

}
