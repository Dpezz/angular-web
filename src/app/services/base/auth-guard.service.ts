import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../data/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate() {
        if (this.auth.loggedIn()) {
            return true;
        } else {
            // if (this.router['url'].indexOf('login') !== -1)
            this.router.navigate(['login']);
            // else
            //     this.router.navigate(['home']);
            return false;
        }
    }
}