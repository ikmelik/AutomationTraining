var n=3;
var prime=true;
if (n<2){
	console.log(false);
} else {
	for(i=2; i<n; i++)
		if(n % i === 0) {
            prime=false;
			
        }
		if (prime){
			console.log(true);
		} else{
			console.log(false);
		}
    




}