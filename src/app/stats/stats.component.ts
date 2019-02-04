import {Component, Input, OnInit} from '@angular/core';
import {Stat} from '~/app/models/Stat';

@Component({
    selector: 'ns-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
    moduleId: module.id,
})
export class StatsComponent implements OnInit {

    @Input() stat: Stat;

    constructor() {
    }

    ngOnInit() {
    }

}
