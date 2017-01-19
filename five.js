// 5.找出数组 arr 中重复出现过的元素 
function duplicates(argument) {
	var dic = {};
	for(a in argument) {
		dic[argument[a]] = dic[argument[a]] === undefined ? 0 : +dic[argument[a]]+1;
	}
	var arr = [];
	for(b in dic) {
		if (dic[b] !== 0) {
			arr.push(+b);
		}
	}
	return arr;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort());