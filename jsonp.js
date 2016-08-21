// JSONP是JSON with Padding的略称。它是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问

// Google的ajax搜索接口：http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=?&callback=? 


    //添加<script>标签的方法
    function addScriptTag(src){
        var script = document.createElement('script');
        script.setAttribute("type","text/javascript");
        script.src = src;
        document.body.appendChild(script);
    }
    
    window.onload = function(){
        //搜索apple，将自定义的回调函数名result传入callback参数中
        addScriptTag("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=apple&callback=result");
        
    }
    //自定义的回调函数result
    function result(data) {
        //我们就简单的获取apple搜索结果的第一条记录中url数据
        alert(data.responseData.results[0].unescapedUrl);
    }
>

// Digg API：来自 Digg 的头条新闻：

// 　　http://services.digg.com/stories/top?appkey=http%3A%2F%2Fmashup.com&type=javascript&callback=?

// Geonames API：邮编的位置信息：

// 　　http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US&callback=?

// Flickr JSONP API：载入最新猫的图片：

// 　　http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?

// Yahoo Local Search API：在邮编为 10504 的地区搜索比萨：

// 　　http://local.yahooapis.com/LocalSearchService/V3/localSearch?appid=YahooDemo&query=pizza&zip=10504&results=2&output=json&callback=?