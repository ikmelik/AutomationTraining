function Machine(power) {
    this._power = power;
    this._enabled = false;

    //set enamle status
    this.setEnable = function () {
        this._enabled = true;
    };
    //set disable status
    this.setDisable = function () {
        this._enabled = false;
    };
}

function Fridge(power) {
    Machine.call(this);

    this._food = [];

    this.setPower= function (power) {
        this._power = power;
    }
    this.setPower(power);
    this.addFood = function (item, ...rest) {

        //check if disabled. if true - return false and type in constole log with some error message....
        if (!this._enabled) {
            console.log('Turn Fridge on please');
            return false;
        }

        //calculate inserted items.
        let countItems = 0;

        if (item) {
            countItems++;
            countItems += rest.length;
            if (this._food.length + countItems > this._power / 100) {
                console.log('Fridge is full');
                return false;
            }

            //hereis insert new item.....
            if (item) {
                this._food.push(item);
            }

            ///and check lenght of other items and adding new array...
            if (rest.length > 0) {
                for (let i = 0; rest.length > i; i++) {
                    this._food.push(rest[i]);
                }
            }
        }

        return true;
    }

    this.getFood = function () {
        return this._food;
    }
}

let myFridge = new Fridge(500);
//check if disable function works ;)
myFridge.setDisable();
myFridge.setEnable();
console.log(myFridge.addFood('картошка', 'капуста', 'свекла'));
console.log(myFridge.addFood('яйца', 'лук', 'йогурт'));
console.log(myFridge.getFood());