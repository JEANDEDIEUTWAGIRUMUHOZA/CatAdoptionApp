import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ns-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.css'],
    moduleId: module.id,
})
export class StatComponent implements OnInit {

    @Input() level: number;

    constructor() {
    }

    ngOnInit() {
    }

}
