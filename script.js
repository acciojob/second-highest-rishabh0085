//your JS code here. If required.

function secondHighest(arr) {

	if(arr.length < 2)
		 return -Infinity;

	arr.sort()

	return arr.length-1;
	
}