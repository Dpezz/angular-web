import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-layout',
    templateUrl: '../../views/layout/layout.component.html',
})

export class LayoutComponent {

    // @ViewChild('sidenav') public sidenav: MatSidenav;
    @ViewChild('sidenav') sidenav: MatSidenav;
    constructor() {
    }

    // openSidenav() {
    //     this.sidenav.open();
    // }

    // closeSidenav() {
    //     this.sidenav.close();
    // }

    reason = '';

    close(reason: string) {
        this.reason = reason;
        // this.sidenav.close();
    }
}