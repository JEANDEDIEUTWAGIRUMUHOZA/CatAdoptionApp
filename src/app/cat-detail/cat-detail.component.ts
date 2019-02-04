import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Cat} from '~/app/models/Cat';
import {CatService} from '~/app/services/cat.service';
import {Page} from 'tns-core-modules/ui/page';
import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
    selector: 'ns-cat-detail',
    templateUrl: './cat-detail.component.html',
    styleUrls: ['./cat-detail.component.css'],
    moduleId: module.id,
})
export class CatDetailComponent implements OnInit {

    cat: Cat;

    constructor(public catService: CatService,
                public page: Page,
                public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.cat = this.catService.getOne(id);
    }

    showDialog(): void {
        dialogs.confirm({
            title: 'Merci ! ',
            message: 'Pour nous contacter, appuyez juste sur le bon bouton !',
            okButtonText: 'Celui-là !',
            cancelButtonText: 'Pas celui-là',
            neutralButtonText: 'Heu....'
        }).then(result => {
            console.log('Dialog result: ' + result);
        });
    }

}
