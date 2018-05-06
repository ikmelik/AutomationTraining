
function MatchAnagarams() {
    this.arr1 = [];
    this.arr2 = [];
    this.setArrs = function (string1, string2) {
        this.arr1 =string1.split('');
        this.arr2 =string2.split('');
    }
    this.prepareCountObject= function (arr) {
        let counters = {};
        for (let i = 0; i < arr.length; i++) {
            if (!counters[arr[i]]) {
                counters[arr[i]] = 1;
            } else {
                counters[arr[i]]++;
            }
        }
        return counters;
    }
    this.matchData = function () {
        let object1 = this.prepareCountObject(this.arr1);
        let object2 = this.prepareCountObject(this.arr2);
        let objct2Keys = Object.keys(object2);
        for (let i = 0; i < objct2Keys.length; i++) {
            if (!object1[objct2Keys[i]] || object1[objct2Keys[i]] != object2[objct2Keys[i]]) {
                return false;
            }
        }
        return true;
    }

}


let matchObj = new MatchAnagarams();
matchObj.setArrs('lemon', 'melon' );
console.log(matchObj.matchData());

matchObj.setArrs('ball', 'lab');
console.log(matchObj.matchData());



