const send = document.getElementById('send');
const edit = document.querySelector('textarea');
const netname = document.querySelector('#netname');
const clear = document.querySelector('#clear');
const search = document.querySelector('#search-inp');
const muluList = document.querySelector('#mulu-list');
const title = document.querySelector(".title i");
const content = document.querySelector('article');
const author = document.querySelector('footer span');
const time = document.querySelector('header .time');
const comList = document.querySelector('#commentList');
const muluShow = document.querySelector('.cata-btn');

(async function(){
	getContextList().then(resolve => {
		muluList.innerHTML = resolve;
		var muluLi = muluList.children;
		for(let j = 0;j < muluLi.length;j++){
			muluLi[j].onclick = async function(){
				document.querySelector('#content').innerHTML = await ajax('/home/logshow?_id=' + muluLi[j].dataset.id).then(value => {
					return value;
				});
			};
		}
	});
	getComList().then(resolve => {
		comList.innerHTML = resolve;
	});
})()

send.onclick = function(){
	let comment = edit.value.trim();
	let name = netname.value.trim();
	if(comment == '' || name == ''){
		alert('网名或评论不可为空');
		return;
	}
	let params = `name=${name}&comment=${comment}`;
	var xhr = new XMLHttpRequest();
	xhr.open('post', '/home/comment');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(params);
	edit.value = '';
	netname.value = '';
	xhr.onload = function(){

	}
	getComList().then(resolve => {
		comList.innerHTML = resolve;
	});
};

clear.onclick = function(){
	edit.value = '';
};

function updatePage(msg){
	title.innerText = msg.title;
	content.innerText = msg.content;
	author.innerText = msg.author;
	time.innerText = msg.date;
}

async function getComList(){
	var commentList = null;
	var comStr = '';
	commentList = await ajax('/home/commentlist')
				.then(value => {
					return JSON.parse(value);
				});
	console.log(commentList);
	for(let m = 0;m <= commentList.length - 1;m++){
		comStr += `<li>
			<div class="name">${commentList[m].name}：</div>
			<p>${commentList[m].commentStr}</p>
		</li>`;
	}
	return comStr;
}

async function getContextList(){
	var listStr = '';
	var list = null;
	await ajax('/home/contentlist')
				.then(value => {
					list = JSON.parse(value);
				});
	for(let i = 0;i < list.length;i++){
		listStr += `<li data-id="${list[i]._id}">${list[i].title}</li>`;
	}
	return listStr;
}

var muluS = true;

muluShow.onclick = function(){
	var status = document.querySelector('.catalog');
	if(muluS){
		status.style.display = "none";
		muluS = false;
	}else{
		status.style.display = "block";
		muluS = true;
	}
}




