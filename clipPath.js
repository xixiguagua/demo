var clipPath = function(ele) {
    if (!ele) {
        return false; }
    ele.removeAttribute("id");
    var eleAttribute = {
        height: ele.clientHeight,
        width: ele.clientWidth,
        distance: 60,
        html: ele.outerHTML
    };
    if (window.getComputedStyle(document.body).webkitClipPath) {
        var a = eleAttribute.distance;
        var n = eleAttribute.width;                                                                           
        var e = eleAttribute.height;
        var o = "";
    for (var i = 0; i < n; i += a) {
            for (var h = 0; h < e; h += a) {
                var d = [i, h];
                var u = [i, h + a];
                var l = [i + a, h + a ];
                var v = [i + a, h];
                var c = [i + a / 2, h + a / 2];
                var m = [
                    [d, c, v],
                    [d, u, c],
                    [c, u, l],
                    [v, c, l]
                ];
                m.forEach(function(t, a) {
                    var n = t.map(function(t) {
                            return t.map(function(t) {
                                return t + "px"
                            }).join(" ")
                        }).join();
                    var e = "-webkit-clip-path: polygon(" + n + ");";
                    var i = Math.random();
                    var h = i < 0.5 ? -1 : 1;
                    var u = [600 * (0.5 - Math.random()), 600 * (0.5 - Math.random())];
                    var l = "translate(" + u.map(function(t) {
                        return t + "px"
                    }).join() + ")rotate(" + Math.round(h * 360 * Math.random()) + "deg)";
                    var o = o + r.html.replace('">', '"style="' + e + v + '">');
                })
            }
        }
        t.parentNode.innerHTMl = r.html + o;
        return true;
    } else { t.className += "no-clipPath";
        return false; }
}

//css
// .clip[style]{
// 	opacity:0;
// }
//只要被剪裁的三角们的父级有了类名active, 所有的三角的位置就不是随机分布，
//而是会以动画形式归位到其原本的位置
// .active .clip[style]{
// 	will-change:transform;
// 	animation:noTransform .5s both;
// }
// @keyframes noTransform{
// 	to {
// 		opacity:1;
// 		transform:translated3d(0,0,0) rotate(0);
// 	}
// }
// .active clip:not[style]{
// 	opacity:0;
// 	animation:fadeIn .1s .4s both;
// }
// @keyframes fadeIn{
// 	from{opacity:0;}
// 	to{opacity:1;}
// }
//应用动效的务必是absolute绝对定位元素。一来效果必须，二来性能考量
// .text{position:absolute;}
// .image{position;absolute;}

//html
// <div>
// <p id="text" class="text clip">hello</p>
// </div>
// <div>
// <img id="image" class="image clip" src="image/img.jpg">
// </div>
// <script>
// var eleText=document.getElementById("text");
// var eleImage=document.getElementById("image");
// clipPath(eleText);
// clipPath(eleImage);
// </script>
