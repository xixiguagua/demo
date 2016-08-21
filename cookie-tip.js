function setCookie(name, value, day) {
    var exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    var cookietext = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString();
    document.cookie = cookietext;
}

function getCookie(name) {
    console.log(document.cookie)
    var cookiename = encodeURIComponent(name);
    var cookiestart = document.cookie.indexOf(cookiename + '=');
    var cookievalue = null;
    if (cookiestart > -1) {
        var cookieend = document.cookie.indexOf(';', cookiestart);
        if (cookieend == -1) {
            cookieend = document.cookie.length - 1;
        }
        cookievalue = decodeURIComponent(document.cookie.substr(cookiestart + cookiename.length + 1, cookieend - 1));
    }
    return cookievalue;
}


(function() {
    var tips = document.getElementById("tips");
    var page = {
        check: function() {
            var cookietip = getCookie("tips");
            console.log(cookietip);
            if (!cookietip) return true; //cookie不存在
            if (cookietip == 'show' || cookietip == "never show") return false;
        },
        show: function() {
            tips.style.display = 'block';
        },
        hide: function() {
            tips.style.display = 'none';
        },
        hidever: function(never) {
            if (never) setCookie('tips', 'never show', 365);
        },
        init: function() {
            var _this = this;
            if (_this.check()) {
                _this.show();
                setCookie("tips", "show", 1);
            } else {
                _this.hide();
            }
            tips.onclick = function() {
                _this.hidever(true);
            }

        }
    }
    page.init();
})()
