export class Stat {
    private _id: number;
    private _humanSociability: number;
    private _animalSociability: number;
    private _cleanliness: number;
    private _energy: number;

    constructor(id: number, humanSociability: number, animalSociability: number, cleanliness: number, energy: number) {
        this._id = id;
        this._humanSociability = humanSociability;
        this._animalSociability = animalSociability;
        this._cleanliness = cleanliness;
        this._energy = energy;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get humanSociability(): number {
        return this._humanSociability;
    }

    set humanSociability(value: number) {
        this._humanSociability = value;
    }

    get animalSociability(): number {
        return this._animalSociability;
    }

    set animalSociability(value: number) {
        this._animalSociability = value;
    }

    get cleanliness(): number {
        return this._cleanliness;
    }

    set cleanliness(value: number) {
        this._cleanliness = value;
    }

    get energy(): number {
        return this._energy;
    }

    set energy(value: number) {
        this._energy = value;
    }
}