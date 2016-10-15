var x = 1;
var y = 2;
var z = 0;
var count = 2;

while (z < 4000000){
	z = x + y;
		if (z % 2 === 0){
			count = count + z;
		}
		else{
			count = count;
		}
	console.log(z);
	x = y;
	y = z;
}
count;