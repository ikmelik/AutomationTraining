var arr = [1, -1, 5, -2, 3, 0],

	positiveArr = arr.filter(function(item){
	return item>0;
}),
	negativeArr = arr.filter(function(item){
    return item<0;
});

console.log('>0 '+positiveArr);
console.log('<0 '+negativeArr);



