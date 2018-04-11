import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/data/auth.service';
import { LayoutComponent } from './layout.component';


@Component({
    selector: 'layout-navbar',
    templateUrl: '../../views/layout/navbar.component.html',
})

export class NavbarComponent {

    constructor(
        public AuthService: AuthService,
        public LayoutComponent: LayoutComponent
    ) { }

    user() {
        return JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        return this.AuthService.logout();
    }

    loggedIn() {
        return this.AuthService.loggedIn();
    }

    // open() {
    //     this.LayoutComponent.openSidenav();
    // }

    // closeSidenav() {
    //     this.LayoutComponent.closeSidenav();
    // }
}