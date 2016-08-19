// CSS中有属性可以让普通元素可读写
// .read-write{
// 	-webkit-user-modify: read-write-plaintext-only;
// }
// <p class="read-write"></p>
// user-modify: read-only;
// user-modify: read-write;//富文本
// user-modify: write-only;//没有浏览器支持
// user-modify: read-write-plaintext-only;//纯文本
// HTML控制法
// <div  id="divedit" contenteditable="plaintext-only"></div>
// contenteditable=""
// contenteditable="events"
// contenteditable="caret"
// contenteditable="plaintext-only"//让编辑区域只能键入纯文本
// contenteditable="true"
// contenteditable="false"

var contenteditable=document.getElementById("divedit");

contenteditable.addEventListener('paste',function(e){
	//qu掉IE http之类地址自动加链接
	try{
		document.execCommand("AutoUrlDetect",false,false);
	}catch(e){}
	e.preventDefault();
	var text=null;
	if(window.clipboardData&&clipboardData.setData){
		//IE
		text=window.clipboardData.getData('text');
	}else{
		text=(e.originalEvent||e).clipboardData.getData('text/plain')||prompt('在这里输入文本');
	}
	if(document.body.createTextRange){
		if(document.selection){
			textRange=document.selection.createRange();
		}else if(window.getSelection){
			sel=window.getSelection();
			var range=sel.getRangeAt(0);
			//创建临时元素,使得textrange可以移动到正确位置
			var temp1=document.createElement("span");
			temp1.innerHTML="&#FEFF";
			range.deleteContents();
			textRange=document.body.createTextRange();
			textRange.moveToElementText(temp1);
			temp1.parentNode.removeChild(temp1)
		}
		textRange.text=text;
		textRange.collapse(false);
		textRange.select();
	}else{
		document.execCommadn("innerText",false,text);
	}
});

//去除快捷键去除Crtl+b/Ctrl+i/Ctrl+u等快捷键
divedit.addEventListener("keydown",function(e){
	if(e.ctrlKey||e.metaKey){
		switch(e.keycode){
			case 66: //ctrl+B
			case 98:
			case 73: //ctrl+I
			case 105:
			case 85: //ctrl+U
			case 117:{
				e.preventDefault();
				break;
			}
		}
	}
})

//自动增加高度
<div class="text_box" contenteditable=true></div>
//css
.text_box{
	width:400px;
	min-height:120px;
	max-height:300px;
	_height:120px;
	margin-left:auto;
	margin-right:auto;
	padding:3px;
	outline:0;
	border:1px solid #a0b;
	font-size:12px;
	word-wrap:break-word;
	overflow-x:hidden;
	overflow-y:auto;
	-webkit-user-modify:read-write-plaintext-only;
}

if(typeof document.webkitHidden=="undefined"){
	//非chrome禁止粘贴
	box.onpaste=function(){
		return false;
	}
}