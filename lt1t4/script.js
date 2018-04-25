var num=12345;
var newNum='';
num=num.toString();
while(num.length>0){
    newNum+=num.slice(-1);
    num = num.slice(0, -1);
}
console.log(Number.parseInt(newNum));
console.log(num)
    




