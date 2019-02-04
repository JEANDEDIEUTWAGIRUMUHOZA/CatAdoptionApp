import {Injectable} from '@angular/core';
import {Race} from '~/app/models/Race';

@Injectable({
    providedIn: 'root'
})
export class RaceService {

    races: Array<Race> = [];
    idCounter = 0;

    constructor() {
        const coon = new Race(++this.idCounter, 'Coon');
        const angora = new Race(++this.idCounter, 'Angora');
        const european = new Race(++this.idCounter, 'Européen');
        const bengal = new Race(++this.idCounter, 'Bengal');
        const sphynx = new Race(++this.idCounter, 'Sphynx');
        this.races = [coon, angora, european, bengal, sphynx];
    }

    getAll(): Array<Race> {
        return this.races;
    }

    getOne(id: number): Race {
        return this.races.filter(race => race.id === id)[0];
    }
}