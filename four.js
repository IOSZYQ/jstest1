// 4.移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 
function remove(argument, item) {
	var arr = [];
	for(a in argument) {
		if (argument[a] !== item) {
			arr.push(argument[a]);
		}
	}
	console.log(arr);
}

remove([1, 2, 3, 4, 2], 2);