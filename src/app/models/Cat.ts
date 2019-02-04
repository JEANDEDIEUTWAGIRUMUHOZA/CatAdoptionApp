import {Stat} from '~/app/models/Stat';
import {Race} from '~/app/models/Race';

export class Cat {
    private _id: number;
    private _name: string;
    private _sex: 'M' | 'F' | 'N';
    private _stat: Stat;
    private _birthday: Date;
    private _race: Race;
    private _image: string;
    private _description: string;
    private _fiv: boolean;

    constructor(id: number, name: string, sex: "M" | "F" | "N", stat: Stat, birthday: Date, race: Race, image: string, description: string, fiv: boolean) {
        this._id = id;
        this._name = name;
        this._sex = sex;
        this._stat = stat;
        this._birthday = birthday;
        this._race = race;
        this._image = image;
        this._description = description;
        this._fiv = fiv;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get stat(): Stat {
        return this._stat;
    }

    set stat(value: Stat) {
        this._stat = value;
    }

    get sex(): 'M' | 'F' | 'N' {
        return this._sex;
    }

    set sex(value: 'M' | 'F' | 'N') {
        this._sex = value;
    }

    get race(): Race {
        return this._race;
    }

    set race(value: Race) {
        this._race = value;
    }

    get birthday(): Date {
        return this._birthday;
    }

    set birthday(value: Date) {
        this._birthday = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get fiv(): boolean {
        return this._fiv;
    }

    set fiv(value: boolean) {
        this._fiv = value;
    }
}