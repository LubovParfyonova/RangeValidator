class RangeValidator{

    /**
     * @param {number} from - число, указывающее начало диапазона;
     * @param {number} to - число, указывающее конец диапазона;
     */

    constructor (from, to) {
        this._from = from;
        this._to = to;
    }

    set from (value) {
        if (typeof value !== 'number') {
            throw new TypeError ('Not correct type');
        }
        this._from = value;
    }
    get from () {
        return this._from;
    }

    set to (value) {
        if (typeof value !== 'number') {
            throw new TypeError ('Not correct type');
        }
        if (value < this._from) {
            throw new Error ('Second number must be better than first number');
        }
        
        this._to = value;
    }
    get to () {
        return this._to;
    }

    get range () {
        const rangeArray = [];
        for (let i = Math.ceil(this._from); i <= Math.floor(this._to); i++){
            rangeArray.push(i);
        }
        return rangeArray;
    }
    validate (number) {
        if ( typeof number !== 'number'){
            throw new TypeError ('It is not a number')
        }
        if (number >= this._from && number <= this._to){
            return "This number is in this range ";
        }
        throw new RangeError ('This number is not in the specified range of numbers');
    }
}

const r = new RangeValidator (4.097, 8.999);
console.log(r.range);


