async function remove(elem){
	alert('点击触发');
	let goalEl = elem.parentNode.firstChild.nextElementSibling;
	let backMsg = await ajax('/admin/manager/artdel?delid=' + goalEl.getAttribute('data-id'));
	history.go(0);
}