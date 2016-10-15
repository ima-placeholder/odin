var count = 0;

for (var i =  0; i < 1000; i++) {
	if (i % 3 === 0){
		count = count + i;
	}
	else if (i % 5 === 0) {
		count = count + i
	}
	else{
		count = count
	}
}