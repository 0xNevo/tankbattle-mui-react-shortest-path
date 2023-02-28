/************************************************************************/
//************************       Tank Class       ***********************/
/************************************************************************/

export default class Tank {
    constructor( _name ){
        this._owner = _name;

        this._health = 0;
        this._attack = 0;
        this._shield = 0;
        this._speed = 0;
        
        this._power = 0;
        this._isWinner = false;

        this.setProperties();
        this.setPoser();
    }

    get owner () {
        return this._owner;
    }

    set owner( val ){
        this._owner = val;
    }

    get health() {
        return this._health;
    }

    set health( val ) {
        this._health = val;
    }

    get attack() {
        return this._attack;
    }

    set attack( val ) {
        this._attack = val;
    }

    get shield() {
        return this._shield;
    }

    set shield( val ) {
        this._shield = val;
    }

    get speed() {
        return this._speed;
    }

    set speed( val ) {
        this._speed = val;
    }

    get power() {
        return this._power;
    }

    set power( val ) {
        this._power = val;
    }

    get isWinner(){
        return this._isWinner;
    }

    set isWinner( val ){
        this._isWinner = val;
    }

    setProperties(){
        this.health = this.getProperty( 0.3, 0.4 );
        this.attack = this.getProperty( 0.1, 0.3 );
        this.shield = this.getProperty( 0, 0.2 );
        this.speed = this.getProperty( 0, 0.1 );
    }

    setPoser(){
        this.power = Math.round( ( this.health + this.attack + this.shield + this.speed ) * 100000 ) / 100000;
    }

    getProperty( sVal, eVal) {
        return Math.floor( ( Math.random() * ( eVal - sVal ) + sVal ) * 100000 ) / 100000;
    }
}