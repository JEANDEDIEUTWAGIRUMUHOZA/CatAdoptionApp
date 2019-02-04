import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '~/app/models/Cat';

@Component({
    selector: 'ns-cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css'],
    moduleId: module.id,
})
export class CatComponent implements OnInit {

    @Input() cat: Cat;

    constructor() {
    }

    ngOnInit() {
    }

}
