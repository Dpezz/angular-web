import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutComponent } from './layout.component';

@Component({
    selector: 'layout-menu',
    templateUrl: '../../views/layout/menu.component.html',
    // styleUrls: ['../../styles/auth.component.css']
})

export class MenuComponent {

    constructor(private router: Router, public LayoutComponent: LayoutComponent) { }

    groups = [
        {
            'name': 'Dashboard',
            'items': [
                { 'name': 'Dashboard', 'icon': 'dashboard', 'url': 'dashboard' },
            ],
        },
        {
            'name': 'Servicios',
            'items': [
                { 'name': 'Ingresos', 'icon': 'arrow_upward', 'url': 'dashboard' },
                { 'name': 'Egresos', 'icon': 'arrow_downward', 'url': 'dashboard' },
            ],
        },
        {
            'name': 'Repositorio',
            'items': [
                { 'name': 'Ingresos', 'icon': 'folder', 'url': 'dashboard' },
                { 'name': 'Egresos', 'icon': 'folder', 'url': 'dashboard' },
            ],
        },
    ];

    // redirect(url) {
    //     this.router.navigate([url]);
    //     this.LayoutComponent.closeSidenav();
    // }
}