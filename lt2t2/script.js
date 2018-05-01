var arr= [ 1, 2, 1, 2, 3.14, 4, 2, 1];
var counters={};
for(i=0;i<arr.length;i++){
    if (!counters[arr[i]]){
        counters[arr[i]]=1;
    } else{
        counters[arr[i]]++;
    }

}

console.log(counters);


