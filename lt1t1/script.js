var a=1, 
b=-3,
c=-4,
d=b*b-4*a*c;

if (d<0 || a==0){
	console.log('Some error');
}else{
	var x1=(-b+Math.sqrt(d))/(2*a);
var x2=(-b-Math.sqrt(d))/(2*a);
console.log('x1='+x1+',x2='+x2);
}


