import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'layout-toolbar',
    templateUrl: '../../views/layout/toolbar.component.html',
    // styleUrls: ['../../styles/auth.component.css']
})

export class ToolbarComponent {
    @Input() data;

    constructor() { }
}