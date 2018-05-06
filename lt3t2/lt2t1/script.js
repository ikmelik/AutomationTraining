let arr = [1, -1, 5, -2, 3, 0];
let fixContextPos = {
    filterPositiveItems: function (isPositive, item) {
        if (isPositive) {
            return item > 0;
        }
        return item < 0;

    }
}

let positiveArr = arr.filter(fixContextPos.filterPositiveItems.bind(fixContextPos, true));
let negativeArr = arr.filter(fixContextPos.filterPositiveItems.bind(fixContextPos, false));

console.log('>0 ' + positiveArr);
console.log('<0 ' + negativeArr);



