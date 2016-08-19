// 典型的懒加载，例如本博文章的图片，当用户滚动图片进入窗体的时候，才去加载；或者用户点击选项卡，原本隐藏的图片此时再去加载，这个也称之为懒加载。
// 而预加载则是，用户还没有行为发生，资源已经加载完毕，从这一定义来讲
//我们绝大数用户都是鼠标去点击选项卡的，而点击选项卡之前会有其他一些行为发生，例如：
// mouseover按钮的容器 → mouseover按钮 → mousedown按钮等。
// 于是，就给了我们机会，在click行为发生之前去预加载图片，例如，我们鼠标hover按钮的时候。一般一个用户hover一个按钮再click行为技术，说有0.5秒的时长一点都不为过吧，因为光鼠标按下再抬起就上百毫秒了。从hover到click之间的这段时间，已经足够我们图片进行预加载了。而hover到click的行为是极大概率事件。于是乎，我们通过提前捕捉用户的其他行为实现了懒加载和预加载结合
// HTML5中有原生的预加载属性，名为prefetch和prerender，例如：
// <link rel='prefetch" href="(url)">
//如果你有很大概率会访问href指向的资源，则可以加入上面的代码，浏览器会预加载一些资源，访问就会更迅速！
 //<link rel="prefetcher" href="(url)">
// prerender比prefetch多了个er，表示的是预加载页面，准确点就是浏览器会在后台（页面不可见）的位置预加载和渲染我们的页面，当我们真的去访问这个页面的时候，就会倏地呈现在我们面前，相比prefetch，兼容性要差一些，目前FireFox和Android都还未支持
//基于jQuery的实现
var eleAs=$('#tab a');
var eleImgs=$('#panel img');
eleAs.each(function(index){
	$(this).data('index',index).click(function(){
		var target=eleImgs.eq($(this).data('index'));
		$(this).addClass('active').siblings('a').removeClass('active');
		target.addClass('active').siblings('img').removeClass('active');
	});
});
//hover行为预加载图片
eleAs.on({
	mouseenter:function(){
		var target;
		if(!this.preloaded){
			target=eleImgs.eq($(this).data('index'));
			//图片地址换成真实地址
			target.attr('src',target.attr('data-src')).removeAttr('data-src');
			//标记已加载
			this.preloaded=false;
		}
	}
})
//HTML
<div id="tab" class="tab">
<a href="javascript:" class="tab-a active"></a>
<a href="javascript:" class="tab-a"></a> 
<a href="javascript:" class="tab-a"></a>
</div>
<div id="panel" class="panel"> 
<img src="img1.jpg" class="active">
<img src="img1.jpg" >
<img src="img1.jpg" >
</div>
//css
.tab-a{
	display:inline-block;
	padding:5px 0;
	margin:0 5px;
	border-bottom:2px solid transparent;
	color:#000;
}
.tab .active{
	border-bottom:2px solid #f33;
}
.panel img{
	display:none;
}
.active{
	display:inline-block;
}

//js事件代理
var eleAs=document.getElementById("tab");
var eleImgs=document.getElementsByTagName("img");
var delegateEvent=function(element,tag,eventName,listener){
	element.addEventListener(eventName,function(e){
		var event=e||window.event;
		var target=event.target||event.srcELement;
		if (target&&target.tagName.toLowerCase()==tag.toLowerCase()) {
			listener.call(target,event);
		}
	})
}
delegateEvent(eleAs,'a','click',function(event){
	addAndChange(event,this);
})
var addAndChange=function(e,ele){
	ele.className+=" avtive";
	ele.siblings().removeClass('active');
	var target=eleImgs.eq(ele.index);
	target.className+=" active";
	target.siblings().removeClass('active');
}

eleAs.addEventListener("mouseenter",function(){
	var target;
	if(!this.preloaded){
		target=eleImgs.eq(ele.index);
		target.setAttribute("src",target.getAttribute("data-src")).removeAttribute("data-src");
		this.preloaded=true;
	}
})