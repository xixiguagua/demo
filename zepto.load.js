
//加载不同的JS库

var fnJSLoad=function(url,callback){
	callback=callback||function(){};
	var eleScript=document.createElement('script');
	eleScript.onload=function(){
		if (!eleScript.isInited) {
			eleScript.isInited=true;
			callback();
		}
	};
	//低版本IE
	eleScript.onreadystatechange=function(){
		if (!eleScript.isInited&&/^loaded|complete$/.test(eleScript.readyState)) {
			eleScript.isInited=true;
			callback();
		}
	};
	eleScript.src=url;
	doc.getElementsByTagName('head')[0].appendChild(eleScript);
};

//IE10+加载zepto.js
//IE7-IE9加载jquery
var URLLIB='js/zepto.min.js';

if (!history.pushState) {
	URLLIB='js/jquery.min.js';
}

fnJSLoad(URLLIB,function(){
	//脚本初始化
	init();
})