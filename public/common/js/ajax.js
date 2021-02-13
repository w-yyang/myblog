function ajax(url, method="get", msg=""){
	const baseUrl = 'http://localhost:8084'
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.open(method, baseUrl + url);
		if(method == 'post'){
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(msg);
		}else{
			xhr.send();
		}
		xhr.onload = function(){
			if(xhr.status === 200){
				resolve(xhr.responseText);
			}else{
				console.log('获取失败');
			}
		};
	});
}