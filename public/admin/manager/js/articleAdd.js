const btn = document.getElementById('uploadfile');

btn.onclick = function(event){
	document.getElementById('file').click();
	event.stopPropagation();
	return false;
};