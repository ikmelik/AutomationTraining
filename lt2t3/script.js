var arr= [1, -1, 5, -2, 3, 0, 1, -2, 3, 3];

function filterPositiveItems(item,isPositive){
if (isPositive){
    return item>0;
} else {
    return item<0;
}
}

var counters={};
function countReps (item){
    for (i = 0; i < item.length; i++) {
        if (!counters[item[i]]) {
            counters[item[i]] = 1;
        } else {
            counters[item[i]]++;
        }

    }
    return counters;
}

console.log(arr.filter(function(item){
    return filterPositiveItems(item,false);
}));
console.log(arr.filter(function(item){
    return filterPositiveItems(item,true);
}));
console.log(countReps(arr));



