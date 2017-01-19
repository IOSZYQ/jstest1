// 5.找出数组 arr 中重复出现过的元素 
function duplicates(argument) {
	// var dic = [];
	// for(a in argument) {
	// 	dic[argument[a]] = dic[argument[a]] === undefined ? 0 : +dic[argument[a]]+1;
	// }
	// var arr = [];
	// for(b in dic) {
	// 	if (dic[b] !== 0) {
	// 		arr.push(b);
	// 	}
	// }	
	// return arr;
	var arr = [];
	for(var i = 0; i < argument.length; i++) {
		var item = argument[i];
		var contain = false;
		for(var j = i+1; j < argument.length; j++) {
			if(argument[j] === argument[i]) {
				if (contain === false) {
					arr.push(argument[i]);
				}
				argument.splice(j, 1);
				contain = true;
			}
		}
	}
	return arr;
}

console.log(duplicates(['a', 'a', 2, 4, 4, 3, 3, 1, 5, 3, '1']).sort());