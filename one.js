// 1.在数组 arr 中，查找值与 item 相等的元素出现的所有位置 
function findAllOccurrences(argument, item) {
	var arr = [];
	for(a in argument){
		if(argument[a] == item) {
			arr.push(a);
		}
	}
	console.log(arr);
	return arr;
}

findAllOccurrences('abcdefabc'.split(''), 'a').sort();