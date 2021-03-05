function selectElem(elem){
	var sbiling = elem.parentNode.children;
	for(let i = 0;i < sbiling.length;i++){
		sbiling[i].className = '';
	}
	elem.className = 'clicked';
	let saveId = elem.children[0].getAttribute('data-id');
	saveData('willdealid', saveId);
	// for(let i = 0;i < liList.length;i++){
	// 	liList[i].onclick = function(){
	// 		for(let j = 0;j < liList.length;j++){
	// 			liList[j].className = '';
	// 		}
	// 		this.className = 'clicked';
	// 		let saveId = this.children[0].getAttribute("data-id");
	// 		saveData('willdealid', saveId);
	// 	};
	// }
}