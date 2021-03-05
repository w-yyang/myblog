var title = document.getElementById('title');
var author = document.getElementById('author');
var content = document.querySelector('#content');
var updatebtn = document.querySelector('#updatecon');

(async function(){
	let dealartid = getData('willdealid');
	if(dealartid){
		let backRes = await ajax(`/admin/manager/getdealart?id=${dealartid}`);
		let result = JSON.parse(backRes);
		console.log(result);
		title.value = result.title;
		author.value = result.author;
		content.value = result.content;
	}else{
		return;
	}
})()

updatebtn.addEventListener('click', async function(){
	let dealartid = getData('willdealid');
	let msg = 'id=' + dealartid + '&content=' + content.value;
	console.log('发送成功 更新文本');
	let back = await ajax(`/admin/manager/artupdate`, "post", msg);
});
