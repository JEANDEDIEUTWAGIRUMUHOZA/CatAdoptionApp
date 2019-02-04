import {Injectable} from '@angular/core';
import {Race} from '~/app/models/Race';
import {Cat} from '~/app/models/Cat';
import {Stat} from '~/app/models/Stat';
import {RaceService} from '~/app/services/race.service';

@Injectable({
    providedIn: 'root'
})
export class CatService {

    cats: Array<Cat> = [];
    idCounter = 0;

    constructor(public raceService: RaceService) {
        const batman = new Cat(++this.idCounter,
            'Batman',
            'M',
            {humanSociability: 1, animalSociability: 2, cleanliness: 4, energy: 5} as Stat,
            new Date(1989, 6, 13),
            this.raceService.getOne(1),
            '~/assets/img/batman.png',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa risus, ' +
            'dictum ut enim eu, facilisis tincidunt sapien. Morbi ' +
            'faucibus ullamcorper viverra. Aenean nec euismod velit, ' +
            'et efficitur turpis. In sit amet libero quam. Fusce faucibus pellentesque ' +
            'lectus rhoncus placerat. Sed non porta urna. Maecenas velit elit, ornare eget ' +
            'venenatis ac, pulvinar at ipsum. Quisque aliquet risus nec ante ultrices, ac ' +
            'porttitor urna gravida. ' +
            'Nullam vitae varius lacus. Sed nec nulla risus.',
            false
        );

        const superman = new Cat(++this.idCounter,
            'Superman',
            'F',
            {humanSociability: 5, animalSociability: 3, cleanliness: 1, energy: 5} as Stat,
            new Date(2015, 6, 14),
            this.raceService.getOne(2),
            '~/assets/img/superman.jpg',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa risus, ' +
            'dictum ut enim eu, facilisis tincidunt sapien. Morbi ' +
            'faucibus ullamcorper viverra. Aenean nec euismod velit, ' +
            'et efficitur turpis. In sit amet libero quam. Fusce faucibus pellentesque ' +
            'lectus rhoncus placerat. Sed non porta urna. Maecenas velit elit, ornare eget ' +
            'venenatis ac, pulvinar at ipsum. Quisque aliquet risus nec ante ultrices, ac ' +
            'porttitor urna gravida. ' +
            'Nullam vitae varius lacus. Sed nec nulla risus.',
            true
            )
        ;
        const aquaman = new Cat(++this.idCounter,
            'Aquaman',
            'M',
            {humanSociability: 1, animalSociability: 1, cleanliness: 1, energy: 4} as Stat,
            new Date(1989, 8, 13),
            this.raceService.getOne(3),
            '~/assets/img/aquaman.jpg',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa risus, ' +
            'dictum ut enim eu, facilisis tincidunt sapien. Morbi ' +
            'faucibus ullamcorper viverra. Aenean nec euismod velit, ' +
            'et efficitur turpis. In sit amet libero quam. Fusce faucibus pellentesque ' +
            'lectus rhoncus placerat. Sed non porta urna. Maecenas velit elit, ornare eget ' +
            'venenatis ac, pulvinar at ipsum. Quisque aliquet risus nec ante ultrices, ac ' +
            'porttitor urna gravida. ' +
            'Nullam vitae varius lacus. Sed nec nulla risus.',
            false
        );
        const wonderwoman = new Cat(++this.idCounter,
            'Wonder Woman',
            'F',
            {humanSociability: 5, animalSociability: 5, cleanliness: 5, energy: 1} as Stat,
            new Date(2015, 6, 13),
            this.raceService.getOne(4),
            '~/assets/img/wonderwoman.jpg',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa risus, ' +
            'dictum ut enim eu, facilisis tincidunt sapien. Morbi ' +
            'faucibus ullamcorper viverra. Aenean nec euismod velit, ' +
            'et efficitur turpis. In sit amet libero quam. Fusce faucibus pellentesque ' +
            'lectus rhoncus placerat. Sed non porta urna. Maecenas velit elit, ornare eget ' +
            'venenatis ac, pulvinar at ipsum. Quisque aliquet risus nec ante ultrices, ac ' +
            'porttitor urna gravida. ' +
            'Nullam vitae varius lacus. Sed nec nulla risus.',
            false
        );
        const joker = new Cat(++this.idCounter,
            'The Joker',
            'N',
            {humanSociability: 6, animalSociability: 2, cleanliness: 2, energy: 5} as Stat,
            new Date(1989, 6, 15),
            this.raceService.getOne(5),
            '~/assets/img/joker.jpg',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa risus, ' +
            'dictum ut enim eu, facilisis tincidunt sapien. Morbi ' +
            'faucibus ullamcorper viverra. Aenean nec euismod velit, ' +
            'et efficitur turpis. In sit amet libero quam. Fusce faucibus pellentesque ' +
            'lectus rhoncus placerat. Sed non porta urna. Maecenas velit elit, ornare eget ' +
            'venenatis ac, pulvinar at ipsum. Quisque aliquet risus nec ante ultrices, ac ' +
            'porttitor urna gravida. ' +
            'Nullam vitae varius lacus. Sed nec nulla risus.',
            true
        );
        this.cats.push(batman, superman, aquaman, wonderwoman, joker);
    }

    getAll(): Array<Cat> {
        return this.cats;
    }

    getOne(id: number): Cat {
        return this.cats.filter(cat => cat.id === id)[0];
    }

    save(name: string, sex: 'M' | 'F' | 'N', stat: Stat, birthday: Date, race: Race, image: string, description: string, fiv: boolean): void {
        this.cats.push(
            new Cat(++this.idCounter, name, sex, stat, birthday, race, image, description, fiv)
        );
    }


}