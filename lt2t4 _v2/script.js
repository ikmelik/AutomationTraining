var matchAnagarams = function(string1, string2) {
    // if length is not the same the words can't be anagrams
    if (string1.length != string2.length) {
        return false;
    }
    // make words comparable
    var arr1 = string1.split('').sort().join('');
    var arr2 = string2.split('').sort().join('');

    // check if each character match before proceeding
    for (i = 0; i<arr1.length; i++) {
        if (arr1==arr2){
            return true;
        } else{
            return false;
        }
    }
};

//console.log(matchAnagarams('lemon', 'melon'));
console.log(matchAnagarams('ball', 'lab'));

