var logi = document.getElementById('adminlogin');
var user = document.getElementById('username');
var password = document.getElementById('password');
var back = document.querySelector('#back');

logi.onclick = function(){
	var xhr = new XMLHttpRequest();
	let username = user.value.trim();
	let passW = password.value.trim();
	if(username == '' || password == ''){
		return;
	}else{
		var sendMsg = `username=${username}&password=${passW}`; 
		xhr.open('post', '/admin/login');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(sendMsg);
		xhr.onload = function(){
			history.go(0);
			document.write(xhr.responseText);
		}
	}
};

back.onclick = function(){
	location.href = '/home';
}

