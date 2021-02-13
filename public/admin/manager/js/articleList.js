var liList = document.querySelectorAll('.art-list li');

for(let i = 0;i < liList.length;i++){
	liList[i].onclick = function(){
		for(let j = 0;j < liList.length;j++){
			liList[j].className = '';
		}
		this.className = 'clicked';
		let saveId = this.children[0].getAttribute("data-id");
		saveData('willdealid', saveId);
	};
}