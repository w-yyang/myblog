function saveData(key, value){
	sessionStorage[key] = value;
}

function getData(key){
	return sessionStorage[key];
}