function matchAnagarams(string1, string2) {
    var arr1 = string1.split('');
    var arr2 = string2.split('');

    function prepareCountObject(arr) {
        var counters = {};
        for (i = 0; i < arr.length; i++) {
            if (!counters[arr[i]]) {
                counters[arr[i]] = 1;
            } else {
                counters[arr[i]]++;
            }
        }
        return counters;
    }

    var object1 = prepareCountObject(arr1);
    var object2 = prepareCountObject(arr2);
    var objct2Keys = Object.keys(object2);
    for (i = 0; i < objct2Keys.length; i++) {
        if (!object1[objct2Keys[i]] || object1[objct2Keys[i]] != object2[objct2Keys[i]]) {
            return false;
        }
    }
    return true;
}

//console.log(matchAnagarams('lemon', 'melon'));
console.log(matchAnagarams('ball', 'lab'));

