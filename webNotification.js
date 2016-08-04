//传统通知
setInterval(function() {
    var title = document.title;
    if (isshine == true) {
        if (/新/.test(title) == false) {
            document.title = "【有新消息】";
        } else {
            document.title = "【】";
        }
    } else {
        document.title = titleInit;
    }
}, 500);

//html5 webNotification
//浏览器窗体获取焦点和失去焦点；chrome和Firefox用window.onfocus,window.onblur;
//IE为doucment.onfocusin,document.onfocusout;
//IE14以及其他桌面浏览器都支持Web Notification，Android部分支持，iOS Safari浏览器全军覆没 
//Notification.requestPermission()允许通知的提示
//Notification.requestPermission().then(function(permission) { ... });函数参数，表示当前是否允许。只会是granted, denied, 或default.
//Notification.permission[只读]
//new Notification(title, options)
// Notification.close()
// Notification.onclick
// Notification.onerror
// Notification.onclose
// Notification.onshow

if (window.Notification) {
    var button = document.getElementById("button");
    var text = document.getElementById("text");

    var popNotice = function() {
        if (Notification.permission == "granted") {
            var notification = new Notification("Hello~somebody", {
                body: "How are you",
                icon: "img.jpg"
            });
            notification.onclick = function(){
            	text.innerHTML="hello"+new Date().toString().split(" ")[0]+"!";
            	notification.close();
            }
        }
    };
    button.onclick = function(){
    	if (Notification.permission=="granted") {
    		popNotice();
    	} else if (Notification.permission!="denied") {
    		Notification.requestPermission(function(permission){
    			popNotice();
    		});
    	}
    };
} else {
	alert("浏览器不支持Notification");
}


//html
// <button id="button">Click</button>
// <p id="text"></p>