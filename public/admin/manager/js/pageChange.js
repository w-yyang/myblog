const menuList = document.querySelector('#menu-list');
var menuItem = menuList.getElementsByTagName('li');
var container = document.querySelector('.main-content');

for(let i = 0;i < menuItem.length;i++){
	menuItem[i].onclick = async function(){
		const path = this.children[0].dataset.url;
		let result = await ajax(path);
		// console.log(path);
		container.innerHTML = result;
		if(path == '/admin/manager/artupdatepage' || path == '/admin/manager/artaddpage'){
			executeScript(result);
		}
	};
}

function executeScript(html){
     // var reg = /<script[^>]*>([^/x00]+)$/ig;
     // 对整段HTML片段按<//script>拆分
     var reg = /<script[^>]*>/ig;
     var htmlBlock = html.split("</script>");
     // console.log(htmlBlock[0]);
     var start = htmlBlock[0].search(reg);
     jsStr = htmlBlock[0].substr(start);
     jsStr = jsStr.replace(reg, '');
     console.log(jsStr);
     eval(jsStr);
    //  for(var i in htmlBlock){
    //     var blocks; // 匹配正则表达式的内容数组，blocks[1]就是真正的一段脚本内容，因为前面reg定义我们用了括号进行了捕获分组
    //     if(blocks = htmlBlock[i].match(reg)){
    //          // 清除可能存在的注释标记，对于注释结尾-->可以忽略处理，eval一样能正常工作
    //         var code = blocks[1].replace(/<!--/, '' );
    //         console.log(code);
    //         try{
    //             eval(code); // 执行脚本
    //         } 
    //         catch(e){
    //         	console.log(e);
    //         }
    //     }
    // }
}
