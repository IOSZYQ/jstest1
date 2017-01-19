// 3.统计数组 arr 中值等于 item 的元素出现的次数 
function count(argument, item) {
	// body...
	var i = 0;
	for(a in argument) {
		if (argument[a] === item) {
			i++;
		}
	}
	console.log(i);
}

count([1, 2, 4, 4, 3, 4, 3], 4);