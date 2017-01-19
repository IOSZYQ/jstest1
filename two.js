// 2.给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false 
function containsNumber(argument) {
	var arr = argument.split('');
	for (a in argument) {
		if(+argument[a]){
			console.log('true');
			return;
		}
	}
	console.log("false");
}

containsNumber('abc123');