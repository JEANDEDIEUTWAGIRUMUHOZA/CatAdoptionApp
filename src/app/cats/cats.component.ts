import {Component, OnInit} from '@angular/core';
import {CatService} from '~/app/services/cat.service';
import {Cat} from '~/app/models/Cat';

@Component({
    selector: 'ns-cats',
    templateUrl: './cats.component.html',
    styleUrls: ['./cats.component.css'],
    moduleId: module.id,
})
export class CatsComponent implements OnInit {

    cats: Array<Cat>;

    constructor(public catService: CatService) {
    }

    ngOnInit() {
        this.cats = this.catService.getAll();
    }

}
