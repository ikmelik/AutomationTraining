function ArrayUtil(input) {
    this.countReps = function () {
        let counters = {};
        for (let i = 0; i < input.length; i++) {
            if (!counters[input[i]]) {
                counters[input[i]] = 1;
            } else {
                counters[input[i]]++;
            }

        }
        return counters;
    }
}
    let objectArray = new ArrayUtil([1, 2, 1, 2, 3.14, 4, 2, 1]);
    console.log(objectArray.countReps());


