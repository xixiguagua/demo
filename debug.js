//找1至n中所有1的个数；
// function num(len){
//            var  nums=1;
//             for(var i=0;i<len;i++){
//                 nums=nums*10;
//             }
//             return nums;
//         }
//         function find(n){
//             if(n==0) return 0;
//     var str=n.toString();
//         var len=str.length;
//         if(len<=0) return 0;
//         var first=Number(str[0]);
//         var firstnum=0;
//         var othernum=0;

//          var all=0;
//         if(first>1){
//             firstnum=num(len-1);
//         }else{
//             firstnum=n%num(len-1)+1;
//         }
//         othernum=first*(len-1)*num(len-2)
//        var recurvienum=arguments.callee(n%num(len-1));

//          return firstnum+othernum+recurvienum;
//             }
//             alert(find(15));
//数组连接，找最小的数字       
// function find(arr){
//     arr.sort(function(a,b){
//         return a-b;
//     })
//   return arr.reduce(function(pre,cur,index,arr){
//     var str1=String(pre)+String(cur);
//     var str2=String(cur)+String(pre);
//     if (str1>str2) return str2;
//     else return str1;
//   })
// }

//判断丑数
// function ischou(num){
//     while(num%2==0){
//         num/=2;
//     }
//     while(num%3==0){
//         num/=3;
//     }
//     while(num%5==0){
//         num/=5;
//     }
//     return num==1?true:false;
// }
// function getnumof(number){
//     if(number<=0){
//         return 0;
//     }
//     var sum=0;
//     var nums=0;
//     while(sum<number){
//         ++nums;
//         if(ischou(nums)){
//             sum++;
//         }

//     }
//     return nums;
// }

// function find(number){
//     var arr=new Array(number);
//     arr[0]=1;
//     var next=1;
//     var i2=0;
//     var j3=0;
//     var k5=0;
//     while(next<number){
//         var min=Math.min(arr[i2]*2,arr[j3]*3,arr[k5]*5);
//         arr[next]=min;
//         while(arr[i2]*2<=arr[next])
//            {i2++;} 
//         while(arr[j3]*3<=arr[next]){
//             j3++;
//         }
//         while(arr[k5]*5<=arr[next]){
//             k5++;
//         }
//         next++;
//     }
//     return arr[next-1];
//     }
/* 第一个出现一次的字符*/
/* function find(str){
    var arr=[];
    console.log(arr);
    var len=str.length;
    for(var i=0;i<len;i++){
    if(!arr[str.charAt(i)]){arr[str.charAt(i)]=1;}
        else{ arr[str.charAt(i)]++;} 
    }
console.log(arr);
    for(var item in arr){
        if(arr[item]==1){
            return item;
        }
    }
};console.log(find("adewa"));
*/

/*删除重复字符*/
/*
function find(str1,str2){
    var arr=[];var len1=str1.length;var len2=str2.length;
    for(var j=0;j<len2;j++){
      if(!arr[str2.charAt(j)]){
      arr[str2.charAt(j)]=1;
      }
      else{
      arr[str2.charAt(j)]++;
      }
    }
    console.log(arr);
    for(var i=0;i<len1;i++){
        if(arr[str1.charAt(i)]){
        str1=str1.replace(str1[i],"");
        i--;
        }
    }
    return str1;
}
console.log(find("wee","wewddggtee"))
function del(str3,str4){
    for(var m=0;m<str3.length;m++){
     var reg=new RegExp(str3[m],'g'); 
    
    console.log(reg);
    str4=str4.replace(reg,"");
    }
    return str4;
}
console.log(del("wee","wertrgreeeww"));
*/
/*网易笔试第一题随机删除两个字符串*/
/*function find(str){
    var len=str.length;console.log(len);
    var arr=[];
    for(var i=0;i<len;i++){
    console.log(i);
    var str2=str.substring(0,i)+str.substring(i+1);console.log(str2);
    for(var j=i;j<len-1;j++){
    console.log(j);
    var str3=str2.substring(0,j)+str2.substring(j+1);console.log(str3);
    if(arr.indexOf(str3)==-1){
    arr.push(str3);
    console.log(arr);
    }
   
    }
    }
     return arr.length;
} 
console.log(find("data"));
*/
/*找出只重复一次的两个数*/
/*找数字二进制右边是1的位
function find(num){
    var index=0;
    while((num&1==0)&&index<32){
    num=num>>1;
    index++;
    }
    return index;
}*/
/*判断右边第indexs位是不是1
function isone(nums,indexs){
    nums=nums>>indexs;
    return (nums&1);
}*/
/*
function findnums(arr){
var len=arr.length;
    if(arr==null||len<=1) return 0;
    var nums1=0;
    var nums2=0;
    var base=0;
  
    for(var i=0;i<len;i++){
    base=base^arr[i];
    }
    
    var whe=find(base);
   
    for(var j=0;j<len;j++){
    if(isone(arr[j],whe)){
    nums1=nums1^arr[j];
  
    }
    else{
    nums2=nums2^arr[j];
  
    }
    }
    return "nums1="+nums1+";nums2="+nums2;
}
console.log(findnums([2,2,3,4]))
*/
/*数字在排序数组中出现的次数*/
/*
function first(arr,length,data,left,right){
    if(left>right) return -1;
    var mid=Math.floor(left+(right-left)/2);
    if(data==arr[mid]) {
    if(mid==0||(mid>0&&arr[mid-1]!=data)){
    return mid;
    }
    else{
    right=mid-1;
    }
    }else{
    if(mid<data){
    left=mid+1;
    }else{
    right=mid-1;
    }
    }
    return first(arr,length,data,left,right)
}
function last(arr,length,data,left,right){
    if(left>right) return -1;
    var midd=Math.floor(left+(right-left)/2);
    if(arr[midd]==data){
    if(midd==length-1||((midd<length-1)&&arr[midd+1]!=data)){
    return midd;
    }else{
    left=midd+1;
    }
    }else{
    if(arr[midd]<data){
    left=midd+1;
    }else{
    right=midd-1;
    }
    }
    return last(arr,length,data,left,right);
}
function find(arr,num){
    var len=arr.length;

    var firstnum=first(arr,len,num,0,len-1);
    console.log(firstnum);
    var lastnum=last(arr,len,num,0,len-1);console.log(lastnum);
    if(firstnum>-1&&lastnum>-1){
    return lastnum-firstnum+1;
    }
}
console.log(find([2,3,3,3,4,4],3))
*/
/*数组中和为定值的*/
/*
function find(arr,num){
    var len=arr.length;
    if(len<=1){return -1;}
    var left=0;
    var right=len-1;
    var array=[]
    while(left<right){
    if(arr[left]+arr[right]==num){
    array.push( left+":"+arr[left]+";"+right+":"+arr[right]);
    left++;
    right--;
    }else if(arr[left]+arr[right]>num){
    right--;
    }else{
    left++;
    }
    }
    return array;
}
console.log(find([1,2,3,4],5))
*/
/*连续序列和为定值*/
/*
function find(num) {
    var arr = [1];
    var sumarr = [];
    var sum1 = arr.reduce(function(pre, cur, index, arr) {
            return pre + cur;
        });
    for (var i = 2; i < num; i++) {
      
        if (sum1 == num) {
            var arrcopy=arr.concat();
            sumarr.push(arrcopy);
        } 
        while(sum1 > num) {
            var item=arr.shift();
            sum1-=item;
           // console.log(sumarr);
            if (sum1 == num) {
            // console.log(num);
            var arrcopy2=arr.concat();
                sumarr.push(arrcopy2); }

                
        }
         arr.push(i);
       sum1+=i;
        
    }
   return sumarr;
}
console.log(find(100));
*/

// function getUrlParam(sUrl, sKey) {
//     var index=sUrl.indexOf("?");
//       var str2=sUrl.slice(index+1);
//     var arr=new Array();
//     if(sKey==null){
//         return str2.length<=0?{}:str2;
//         }
//     else if(sKey!=null){
//         var str3=str2.split("&");
//         var str4=[];
//         for(var item in str3){
//             var items=str3[item].split("=");
//             if(items[0]==sKey){
//                 arr.push(items[1]);
//             }
//         }
//         return arr.length<=0?"h":arr;
//     }
// }

// console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))
//插入排序
// function insertsort(arr,low,height){
//     for(var i=low+1;i<=height;i++){
//         for(var j=i;j>0;j--){
//             if(arr[j]<arr[j-1]){
//                 swap(arr,j,j-1);
//             } else break;
//         } 
//     }
//     return arr;
// }

// // 快排
// function swap(arr,i,j){
//     var temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
// }
// function sort(arr,low,hight){
//     if(low>=hight) return -1;
//     var i=low;
//     var j=hight+1;
//     if(j-i<10){
//         insertsort(arr,i,j)
//     }
//     while(i<j){
//         while(arr[++i]<=arr[low]){
//             if(i==hight) break;
//         }
//         while(arr[--j]>arr[low]){
//              if(j==low) break;
//         }
//         if(i>=j) break;
//         swap(arr,i,j);
//     }
//         swap(arr,low,j);
//         sort(arr,low,j-1);
//         sort(arr,j+1,hight);
//         return arr;
// }
// console.log(sort([1,2,1,3,1,2,3,4,5,2,1,3,5,4,24,24,1,12,4,465,56,675,2],0,22));

// //左旋转字符串
// //基本类型string的值不可以改变，所以不能用swap；
// function reverse(str,n){
  // return  str.substr(-n).concat(str.replace(str.substr(-n),""));

 // for (var i=0;i<n;i++){
 //   str= str.substr(1)+str.charAt(0);
 // }
   //转成数组操作str.split();  
   //开辟新空间复制 
   // newstr[i]=str[j--]; 
//   return str;
// }
// console.log(reverse('str',2));

//字符串逆序
// function reverseall(str){
 //     if(!str) {
 //    return "";
 // }else{
 //    return reverse(str.substr(1))+str.charAt(0);
 // }
 //转成数组
 //开辟新空间
 // newstr[i]=str[j--]
 //递归
 // if(str.length<2) return str;
 // var mid=Math.ceil(str.length/2);
 // return reverseall(str.substr(mid))+reverseall(str.substr(0,mid));
 //借助Array
 // return [].reduceRight.call(str,function(pre,dur){
 //    return pre+dur;
 // })
// }
// console.log(reverseall("strqw"));


// //单词翻转
// function reversrword(str){
//   //借助数组 
//   // return str.split(" ").reverse().join(" ");
// //翻转整个字符串，再翻转单个单词
//    var str1=reverseall(str);

// }
// console.log(("i anm sfd"));
//一组数中只有一个数出现一次，其余出现N次的通用解法
// function find(arr){
//     var len=arr.length;var ret=0;
//     for(var i=0;i<32;i++){
//         var mask=1<<i;
//         var num=0;
//         for(var j=0;j<len;j++){
//             var val=arr[j]&mask;
//             if(val>0||val<0) num++;//val<0,考虑负数
           
//         }
//         if(num%3>0) 

//             ret=ret|mask;
//     }
//     return ret;
// }

// console.log(find([-2,-2,-2,3,3,3,-4]))

// function findAllOccurrences(arr, target) {
//     var arr1=[];
//      return arr.map(function(item,index,arr){
//         return item==target?this.push(index):item;
//     },arr1);
    // return arr1;
// }
// console.log(findAllOccurrences(['a','a','b','a'],'a'))
// console.log(arr,arr1)


// function count (start, end) {
//     var timer = null;
//     console.log(start++);
//     timer = setInterval(function () {
//         if(start<=end){
//             console.log(start++);
//         }
//     },100);
//     return {
//         cancel: function  () {
//             clearInterval(timer);
//         }
//     }
// }
// function alterContext(fn, obj) {
//     return fn.apply(obj,obj);
// }
// console.log(alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' }))

// function compare(a,b){
//     return a==b?0:a>b?1:-1;
// }
// const INDEX = Symbol('index');
// function getComparer(compare) {
//     return function (left, right) {
//         var result = compare(left, right);
//         return result === 0 ? left[INDEX] - right[INDEX] : result;
//     };
// }
// function sort(array, compare) {
//     array = array.map(
//         (item, index) => {
//             if (typeof item === 'object') {
//                 item[INDEX] = index;
//             }
//             return item;
//         }
//     );
//     return array.sort(getComparer(compare));
// }
// console.log(sort([2,3,4,5,2,3,4],compare))

// function swap(arr, from, to) {
//     // if (from == to) return;
//     var temp = arr[from];
//     arr[from] = arr[to];
//     arr[to] = temp;
// }
// function compare(a,b){

//     return a-b;
// }
 
// function QuickSortWithPartition(arr, func, from, to) {
//     if (!arr || !arr.length) return [];
//     if (arr.length === 1) return arr;
//     from = from === void 0 ? 0 : from;
//     to = to === void 0 ? arr.length - 1 : to;
//     var pivot = arr[from];
//     var smallIndex = from;
//     var bigIndex = from + 1;
//     for (; bigIndex <= to; bigIndex++) {
//         if (func(arr[bigIndex], pivot) < 0) {
           
//             swap(arr, smallIndex, bigIndex);
//              smallIndex++;
//         }
//     }
//     swap(arr, pivot, smallIndex);
//     QuickSortWithPartition(arr, func, from, smallIndex - 1);
//     QuickSortWithPartition(arr, func, smallIndex + 1, to);
//     return arr;
// }
// console.log(QuickSortWithPartition([2,4,5,3,6],compare,0,4));

//快排稳定方法
// function compare(a,b){
//     return a==b?0:a>b?1:-1;
// }
// const INDEX = Symbol('index');
// function getComparer(compare) {
//     return function (left, right) {
//         var result = compare(left, right);
//         return result === 0 ? left[INDEX] - right[INDEX] : result;
//     };
// }
// function sort(array, compare) {
//     array = array.map(
//         (item, index) => {
//             if (typeof item === 'object') {
//                 item[INDEX] = index;
//             }
//             return item;
//         }
//     );
//     return array.sort(getComparer(compare));
// }
// // console.log(sort([5,4,3,2,1],compare))
// console.log([5,4,3,2,1].sort())


// function saveMoney(i) {
//         if (i == 48) {
//             return 1000;
//         } else {
//             return (saveMoney(i + 1) + 1000) / (1 + 0.0171 / 12);
//         }

//     }

//     console.log(saveMoney(0))

//首先执行functionFunction('Hello')，传入参数str，然后返回函数f，f与('world')组合，执行f('world')，传入参数s，
//f返回str+", "+s，即Hello, world。注意中间的逗号后面有一个空格。
// function <add></add>(x) {
//     return function(y) {
//         if (typeof y !== 'undefined') {
//            return x = x + y;
             
//         } else {
//             return x;
//         }
//     };
// }
// console.log(add(1)(1))
// function functionFunction(str) {
//     return function(y) {
//         if (typeof y !== 'undefined') {
//             str = str+ y;
//             return arguments.callee;
//         } else {
//             return str;
//         }
//     };
// }
// console.log(functionFunction('Hello')(1)(2)())
// console.log(functionFunction())

// function combo(str){
//     var arr=str.split("-");
//     for(var i=1;i<arr.length;i++){
//         arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1)
//     }
//     str=arr.join('');
//     return str;
// }
// console.log(combo("get-wef-uu"))
// console.log([1,2].reverse())
// console.log([1,2,13,4].sort())
// console.log('190'.charCodeAt())
// function escapehtml(str){
//     return str.replace(/[<>&"]/g,function(match){
//         switch (match){
//             case "<":
//             return "&lt;";
//             case ">": return "&gt;";
//             case "\"":return "&quto;";
//             case "&":return "&amp;"
//         }
//     });
// }
// console.log(escapehtml('ser<rg&12'))
// /\b([a-z]+) \1\b/gi 一个单词连续出现的位置。
// /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/ 将一个URL解析为协议、域、端口及相对路径。
// /^(?:Chapter|Section) [1-9][0-9]{0,1}$/ 定位章节的位置。
// /[-a-z]/    A至z共26个字母再加一个-号。
// /ter\b/ 可匹配chapter，而不能匹配terminal。
// /\Bapt/ 可匹配chapter，而不能匹配aptitude。
// /Windows(?=95 |98 |NT )/    可匹配Windows95或Windows98或WindowsNT，当找到一个匹配后，从Windows后面开始进行下一次的检索匹配。
// /^\s*$/ 匹配空行。
// /\d{2}-\d{5}/   验证由两位数字、一个连字符再加 5 位数字组成的 ID 号。
// /<\s*(\S+)(\s[^>]*)?>[\s\S]*<\s*\/\1\s*>/   匹配 HTML 标记。
// function trim(str){
//     if(String.prototype.trim){
//        return str.trim();
//     }
//     else{
//         String.prototype.trim=function(){
//             return str.replace(/^\s+/,"").replace(/\s+$/,"");
//         }
//     }
// }
// console.log((' \t\nere  ').trim())
//斐波那数列的一种改进
// var result=[];
// function fe(n){
//     if (n==0) return 0;
//     if (n==1|n==2) return 1;
//     if(result[n]) return result[n];
//     result[n]= arguments.callee(n-1)+arguments.callee(n-2);
//     return result[n];
// }
// console.log(fe(8),result)

//获得对象的所有属性（不管是自身的还是继承的，以及是否可枚举
// function inheritedPrototypeName(obj){
//     var proto={};
//     while(obj){
//         Object.getOwnPropertyNames(obj).forEach(function(p){
//             proto[p]=true;
//         })
//         obj=Object.getPrototypeOf(obj);//获取obj原型
//     }
//     return Object.getOwnPropertyNames(proto);//获取自身属性的属性名组成的数组
// }
// console.log(inheritedPrototypeName([1,2]))
// //对象的复制
// function copyObject(orig) {
//   var copy = Object.create(Object.getPrototypeOf(orig));
//   copyOwnPropertiesFrom(copy, orig);
//   return copy;
// }

// function copyOwnPropertyiesForm(target,source){
//     Object
//     .getOwnPropertyNames(source)
//     .forEach(function(protokey){
//         var desc=Object.getProertyDescriptor(source,protokey)
//         Object.defineProperty(source,prototype,desc);
//     })
// }

// function copyOwnPropertiesFrom(target, source) {
//   Object
//   .getOwnPropertyNames(source)
//   .forEach(function(propKey) {
//     //返回指定对象上一个自有属性对应的属性描述符
//     var desc = Object.getOwnPropertyDescriptor(source, propKey);
//     //直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。
//     Object.defineProperty(target, propKey, desc);//desc需被定义或修改的属性的描述符
//   });
//   return target;
// }
//从后数每隔三个数加一个逗号122,353
// function addquote(num){
//     if (typeof num !=='number') return 0;
//     var str=num.toString();
//     str=Array.prototype.slice.apply(str);
//     var len=str.length-1;
//     var point=str.indexOf(".");
//     if(point<0){
//         while(len>2){
//             str[len-3]=str[len-3]+',';
//             len-=3;
//     }
//     }
//     else{
//         point=point-1;
//         while(point>2){
//             str[point-3]=str[point-3]+',';
//             point-=3;
//         }
//     }
//     return str.join('');    
// }
//     console.log(addquote(111298908236))

    //闭包点击元素

     // for(var i=0;i<3;i++){
        
     //    var div=document.createElement("div");
     //    var text=document.createTextNode("ret");
     //    div.appendChild(text);
     //    document.body.appendChild(div);

     //   (function(i){
     //     console.log(i);
     //        div.addEventListener('click',function(){
     //            alert(i);

     //        });
     //    })(i);
     // //或第二种
     // div.index=i;
     // div.onclick=function(){
     //    alert(this.index);
     // }
// }
//有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。
//在函数外部无法读取函数内部声明的变量。如果出于种种原因，需要得到函数内的局部变量。
//那就是在函数的内部，再定义一个函数。
//函数f2就在函数f1内部，这时f1内部的所有局部变量，对f2都是可见的
//这就是JavaScript语言特有的”链式作用域”结构（chain scope），子对象会一级一级地向上寻找
//所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
//函数f1的返回值就是函数f2，由于f2可以读取f1的内部变量，所以就可以在外部获得f1的内部变量了。
//闭包就是函数f2，即能够读取其他函数内部变量的函数。由于在JavaScript语言中，
//只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。
//闭包最大的特点，就是它可以“记住”诞生的环境，比如f2记住了它诞生的环境f1，所以从f2可以得到f1的内部变量。
//原因就在于f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制回收。
//在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
//闭包的最大用处有两个，一个是可以读取函数内部的变量，
//另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在
//闭包封装
//立即调用的函数表达式(function(){})()
//JavaScript引擎规定，如果function关键字出现在行首，一律解释成语句。
//因此，JavaScript引擎看到行首是function关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。
//解决方法就是不要让function出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。
//它的目的有两个：一是不必为函数命名，避免了污染全局变量；
//二是IIFE内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量
// (function(){
//     var item='items';
//     var id=123;
//     var exp={};
//     function constr(id){
//         return ++id;
//     }
//     exp.getitem=function(){
//         return item;
//     }
//     exp.getid=function(){
//         return id;
//     }
//     window.asd=exp;
// })();
// console.log(asd.getitem(),asd.getid());

//在代码中任何地方都能访问到的对象拥有全局作用域，一般来说以下 3 种情形拥有全局作用域。
//最外层函数和在最外层函数外面定义的变量拥有全局作用域
//所有末定义直接赋值的变量自动声明为拥有全局作用域
//所有window对象的属性拥有全局作用域 


///在作用域链
//在 JavaScript 中，函数也是对象，实际上，JavaScript 里一切都是对象。
//函数对象和其它对象一样，拥有可以通过代码访问的属性和一系列仅供 JavaScript 引擎访问的内部属性。
//其中一个内部属性是 [[Scope]]，由 ECMA-262 标准第三版定义，该内部属性包含了函数被创建的作用域中对象的集合，
//这个集合被称为函数的作用域链，它决定了哪些数据能被函数访问。
//在函数创建时，它的作用域链中会填入一个全局对象，该全局对象包含了所有全局变量。
//函数执行时会创建一个称为“运行期上下文(execution context)”的内部对象，运行期上下文定义了函数执行时的环境。
//每个运行期上下文都有自己的作用域链，用于标识符解析，当运行期上下文被创建时，
//而它的作用域链初始化为当前运行函数的[[Scope]]所包含的对象。
//这些值按照它们出现在函数中的顺序被复制到运行期上下文的作用域链中。它们共同组成了一个新的对象，
//叫“活动对象(activation object)”，该对象包含了函数的所有局部变量、命名参数、参数集合以及this，然后此对象会被推入作用域链的前端。
//当运行期上下文被销毁，活动对象也随之销毁。
//在函数执行过程中，每遇到一个变量，都会经历一次标识符解析过程以决定从哪里获取和存储数据。
//该过程从作用域链头部，也就是从活动对象开始搜索，查找同名的标识符，如果找到了就使用这个标识符对应的变量，
//如果没找到继续搜索作用域链中的下一个对象，如果搜索完所有对象都未找到，则认为该标识符未定义。
//函数执行过程中，每个标识符都要经历这样的搜索过程。
//对于 innerFun()，其作用域链包含 3 个对象：
//innerFun() 自己的变量对象、outFun()的变量对象、全局变量对象。

//特例：通过构造器创建的函数是访问不到外层的局部变量的。
// function outer() {
//     var i = 1;
//     var func = new Function("console.log(typeof i);");
//     func(); // undefined
// }
// console.log(outer());
//延长作用域链
//有些语句可以在作用域链的前端临时增加一个变量对象，
//该变量对象会在代码执行后被移除。有两种情况下会发生这种现象。
//try-catch 语句中的 catch 块
//with 语句
//对 with 来说，将会指定对象添加到作用域链中。对 catch 来说，会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明。

//函数本身也是一个值，也有自己的作用域。
//它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。
// var a = 1;
// var x = function () {
//   console.log(a);
// };
// function f() {
//   var a = 2;
//   x();
// }
// console.log(f()) // 1
//同样的，函数体内部声明的函数，作用域绑定函数体内部。
// function foo() {
//   var x = 1;
//   function bar() {
//     console.log(x);
//   }
//   return bar;
// }
// var x = 2;
// var f = foo();
// console.log(f())//1

//函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。
//这意味着，在函数体内修改参数值，不会影响到函数外部。
//但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。
//也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。
// var obj = {p: 1};
// function f(o) {
//   o.p = 2;
// }
// f(obj);
// console.log(obj.p) // 2
//某些情况下，如果需要对某个原始类型的变量，获取传址传递的效果，可以将它写成全局对象的属性。
// var a = 1;
// function f(p) {
//   window[p] = 2;
// }
// f('a');//属性为字符串格式
// console.log(a);//2 console.log(window.a)//2

//arguments对象包含了函数运行时的所有参数，arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。
//这个对象只有在函数体内部，才可以使用。
//可以通过arguments.callee，达到调用函数自身的目的。

///变量初始化阶段
//JS解释器如何找到我们定义的函数和变量？
//变量对象 (Variable Object, 缩写为VO) 是一个抽象概念中的“对象”，
//它用于存储执行上下文中的：变量  函数声明  函数参数
//VO按照如下顺序填充:
//函数参数 (若未传入，初始化该参数值为undefined)
//函数声明 (若发生命名冲突，会覆盖)
//变量声明 (初始化变量值为 undefined，若发生命名冲突，会忽略。)
//注：函数表达式不会影响 VO
// function foo(x, y, z) {
//     console.log(x,y,z)//[Function: x] undefined undefined
//     function x() {};
//     console.log(x);
// }
// console.log(foo(100));//[Function: x]
// function foo4() {
//     function x() {};
//     var x;//初始化变量值为 undefined，若发生命名冲突，会忽略
//     console.log(x);
// }
// console.log(foo4());//[Function: x]
// function foo2(x, y, z) {
//     var x = 50;
//     function x(){};
//     console.log(x);
// }
// console.log(foo2(110));//50
// function foo2(x, y, z) {
//     var x = function(){};
//     function x(){};
//     console.log(x);
// }
// console.log(foo2(110))//[Function]


//javascript代码在运行前还有一个过程就是：
//预加载，预加载的目的是要事先构造运行环境例如全局环境，函数运行环境，还要构造作用域链（关于作用域链和环境，本文后续会做详细的讲解），
//而环境和作用域的构造的核心内容就是指定好变量属于哪个范畴，因此在javascript语言里变量的定义是在预加载完成而非在运行时期。
//在javascript里变量的复制（函数传参也是变量赋值）本质是传值，这个值就是栈区的值，
//而基本类型的内容是存放在栈区的值里，所以复制基本变量后，两个变量是独立的互不影响，
//但是当复制的是引用类型时候，复制操作还是复制栈区的值，但是这个时候值是堆区对象的地址，
//因为javascript语言是不允许操作堆内存，因此堆内存的变量并没有被复制，所以复制引用对象复制的值就是堆内存的地址，
//而复制双方的两个变量使用的对象是相同的，因此复制的变量其中一个修改了对象，另一个变量也会受到影响。
//栈区的值除了变量复制起作用，它在if语句里也会起到作用，当栈区的值为undefined、null、“”（空字符串）、0、false时候，if的条件判断则是为false
// var obj = {}; 
// if (!!obj){ console.log("true"); }else{ console.log("false"); } 
//结果则是true，因为var obj = {}相当于var obj = new Object(),虽然对象里没什么内容，
//但是在堆区里，对象的内存已经分配了，而变量栈区的值已经是内存地址了，所以if语句判断就是true了


//预加载：函数声明x，变量声明x=undefined,a=undefined,b=undefined,但是变量未赋值,不能覆盖函数的声明
//代码执行，第一个alert中x为函数
//然后x赋值10,覆盖函数x,第二个alert中x为10
//x赋值20,第三个alert是20
//执行if语句
//
// alert(x); // function
// var x = 10;
// alert(x); // 10
// x = 20;
// function x() {}
// alert(x); // 20
// if (true) {
//     var a = 1;
// } else {
//     var b = true;
// }
// alert(a); // 1
// alert(b); // undefined

//浅度克隆：基本类型为值传递，对象仍为引用传递。
//深度克隆：所有元素或属性均完全克隆，并于原引用类型完全独立，
//即，在后面修改对象的属性的时候，原对象不会被修改
//第一种方法
// function cloneObject(src) {
//     // your implement
//     var o; //result
//     if (Object.prototype.toString.call(src) === "[object Array]") {
//         o = []; //判断是否是数组，并赋初始值
//     } else {
//         o = {};
//     }
//     for (var i in src) { //遍历这个对象
//         if (src.hasOwnProperty(i)) { //排出继承属性
//             if (typeof src[i] === "object") {
//                 o[i] = cloneObject(src[i]); //递归赋值
//             } else {
//                 o[i] = src[i]; //直接赋值
//             }
//         }
//     }
//     return o;
// }


// function cloneObject(obj){ 
// var o = obj.constructor === Array ? [] : {}; 
// for(var i in obj){ 
// if(obj.hasOwnProperty(i)){ 
// o[i] = typeof obj[i] === "object" ? cloneObject(obj[i]) : obj[i]; 
// } 
// } 
// return o; 
// } 
//第二种方法
// // var s = JSON.stringify( obj ); 
// // var o = JSON.parse( s ); 
// console.log(cloneObject())

//jQuery实现原理
// jQuery.extend = jQuery.fn.extend = function() {
//     var src, copyIsArray, copy, name, options, clone,
//         target = arguments[0] || {},
//         i = 1,
//         length = arguments.length,
//         deep = false;

//     // Handle a deep copy situation
//     if ( typeof target === "boolean" ) {
//         deep = target;

//         // skip the boolean and the target
//         target = arguments[ i ] || {};
//         i++;
//     }

//     // Handle case when target is a string or something (possible in deep copy)
//     if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
//         target = {};
//     }

//     // extend jQuery itself if only one argument is passed
//     if ( i === length ) {
//         target = this;
//         i--;
//     }

//     for ( ; i < length; i++ ) {
//         // Only deal with non-null/undefined values
//         if ( (options = arguments[ i ]) != null ) {
//             // Extend the base object
//             for ( name in options ) {
//                 src = target[ name ];
//                 copy = options[ name ];

//                 // Prevent never-ending loop
//                 if ( target === copy ) {
//                     continue;
//                 }

//                 // Recurse if we're merging plain objects or arrays
//                 if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
//                     if ( copyIsArray ) {
//                         copyIsArray = false;
//                         clone = src && jQuery.isArray(src) ? src : [];

//                     } else {
//                         clone = src && jQuery.isPlainObject(src) ? src : {};
//                     }

//                     // Never move original objects, clone them
//                     target[ name ] = jQuery.extend( deep, clone, copy );

//                 // Don't bring in undefined values
//                 } else if ( copy !== undefined ) {
//                     target[ name ] = copy;
//                 }
//             }
//         }
//     }

//     // Return the modified object
//     return target;
// };
//第三种
// function copyObject(orig) {
//   var copy = Object.create(Object.getPrototypeOf(orig));
//   copyOwnPropertiesFrom(copy, orig);
//   return copy;
// }
// function copyOwnPropertiesFrom(target, source) {
//   Object
//   .getOwnPropertyNames(source)
//   .forEach(function(propKey) {
//     var desc = Object.getOwnPropertyDescriptor(source, propKey);
//     Object.defineProperty(target, propKey, desc);
//   });
//   return target;
// }
// console.log(copyObject([{2:'s'}]))
// function cloneobject(obj){
//     var o;
//     if(Object.prototype.toString.call(obj)==='[object Array]'){
//         o=[];
//     }
//     else{
//         o={};
//     }
//     for(var i in obj){
//         if(obj.hasOwnProperty(i)){
//             if (typeof obj[i]=='object'){
//                 o[i]=cloneObject(obj[i]);
//             }
//             else{
//                 o[i]=obj[i];
//             }
//         }
//     }
//     return o;
// }
// console.log(cloneobject(function x(){}))


// function cloneObject(obj){
//     var o;
//     o=obj.constructor==Array?[]:{};
//     for(var i in obj){
//         if(obj.hasOwnProperty(i)){
//             o[i]=typeof obj[i]=='object'?cloneObject(obj[i]):obj[i];
//         }
// }
// return o;
// }
// console.log(cloneObject(function x(){}))
//自己的cloneobject
// function copyObject(obj){
//     var o=Object.create(Object.getPrototypeOf(obj));
//     deepclone(o,obj);
//     return o;
// }
// function deepclone(target,source){
//     Object.getOwnPropertyNames(source).forEach(function(pro){
//         var desc=Object.getOwnPropertyDescriptor(source,pro);
//         Object.defineProperty(target,pro,desc);
       
//     });
//      return target;
// }
// function cloneObject(obj){
        
//     if (Object.prototype.toString.call(obj)=='[object Array]') {
//         var o=[];
//         for(var proto in obj){
//             if (typeof obj[proto] == 'object') {
//                 o[proto]=copyObject(obj[proto]);
//             }
//             else{
//                 o[proto]=obj[proto];
//             }
//         }
//             return o;
//     }else{
//         return copyObject(obj);
//     }
//     }
// console.log(cloneObject([8,{w:'ww'}]));

//数组去重
// function uniqarr(arr){
//     for(var i=0;i<arr.length;i++){
//         // console.log(arr.length)
//         if (arr.indexOf(arr[i])!=i){
//             arr.splice(i,1);
//             i--;
//         }
//     }
//     return arr;
// }
// console.log(uniqarr([1,1,22,22,2,1,1,1,]))
//
//小贤是一条可爱的小狗(Dog)，它的叫声很好听(wow)，每次看到主人的时候就会乖乖叫一声(yelp)
//小芒和小贤一样，原来也是一条可爱的小狗，可是突然有一天疯了(MadDog)，
//一看到人就会每隔半秒叫一声(wow)地不停叫唤(yelp)。请根据描述，按示例的形式用代码来实。（继承，原型，setInterval）
// function dog(){
//     this.wow=function(){
//         console.log('wow');
//     }
//     this.yelp=function(){
//        this.wow();
//     }
// }
// function Maddog(){
//     this.yelp=function(){
//         var self=this;
//         setInterval(function(){
//          self.wow();
//         },500);
//     }
// }
// Maddog.prototype=new dog();

// var adog=new dog();
// // console.log(adog.yelp());
// var maddog=new Maddog();
// // console.log(maddog.yelp())

//由于attachEvent在IE中有this指向问题，所以调用它时需要处理一下
//attachEvent事件执行顺序与声明相反
// function addEvent(ele,type,listener){
//     if(ele.addEventListener){
//         ele.addEventListener(type,listener);
//     }else if(ele.attachEvent){
        
//         ele.attachEvent('on'+type,function(){
//             return listener.call(ele);
//         });
//     }else{
//         elem['on'+type]=listener;
//     }
// }

//// 判断是否为邮箱地址
// function isEmail(emailStr) {
//     var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
//     return pattern.test(emailStr);
// }

// 判断是否为手机号
// function isMobilePhone(phone) {
//     var pattern = /^(\+\d{1,4})?\d{7,11}$/;
//     return pattern.test(phone);
// }

// console.log('hell wof ef'.replace(/\s/g,'').split('').join(' '))

//函数声明与函数表达式的区别
//在js中，解析器在向执行环境中加载数据时，对函数声明和函数表达式并非是一视同仁的，
//解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问），
//至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解析执行。

//为什么不要直接在Object.prototype上定义方法
//容易造成全局污染，和其他库冲突
//出了Bug不太好定位问题,当你的项目不止一个人时，就很容易出现冲突
//有可能出现代码向上不兼容的情况，比如定义了一个Object.prototype.clone。
//万一ES7、ES8也定义了这个函数，那旧代码不就会出现问题了嘛！
//如果所有人都改呢？这个问题的严重性应该不用说了

//
// function log(msg){
//     console.log(msg);
// }
// //传入多个参数
// function log(){
//     console.log.apply(console,arguments)
// }
// function log(){
//     var arg=Array.prototype.slice.apply(arguments);

//     arg.unshift('(app)');

//     console.log.apply(console,arg);
// }
//对于apply和call两者在作用上是相同的，即是调用一个对象的一个方法，以另一个对象替换当前对象。
//将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
//但两者在参数上有区别的。对于第一个参数意义都一样，
//但对第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，
//而call的参数需要一一列举出（从第二个参数开始）。 
//如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3]) 

//伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，
//但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，
//还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。
//可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象。
// console.log(log('af'))
// console.log.apply(console.log,['w',]);

//bind定义
// Function.prototype.bind=function(){
//      var fn=this;
//     var context=arguments[0];
//     var arg=Array.prototype.slice.call(arguments,1);
//     return function(){
//         return fn.apply(context,arg);
//     }

// }

//window.onload()方法是必须等到页面内包括图片的所有元素加载完毕后才能执行。
//$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。
//window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个。
//$(document).ready()可以同时编写多个，并且都可以得到执行。
//js实现ready()
// function ready(fn){
//     if (document.addEventListener) {
//         document.addEventListener('DomContentLoaded',function(){
//             console.log(arguments.callee);
//             document.removeEventListener('DomContentLoaded',arguments.callee,false);

//             fn();
//         },false)
//     }else{
//         document.attachEvent('onreadystatechange',function(){
//             if (document.readyState='complete') {
//                 document.detachEvent('onreadystatechange',arguments.callee);
//                 fn();
//             }
//         })
//     }
// }
// console.log(ready(function(){alert('we')}))

//使用format函数将函数的参数替换掉{0}这样的内容
// (function(window){
//     function fn(str){
//         this.str=str;
//     }
//     fn.prototype.formate=function(){
//         var arg=arguments;
//         return this.str.replace(/\{(\d+)\}/ig,function(a,b){
//             return arg[b]||'';
//         });
//     }
//       window.fn=fn;
// })(window)
// (function(){
//     var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
//     console.log(t.format('http://www.alibaba.com','Alibaba','Welcome'));
// })();

//数组去重
// function unqiarr(arr){
//    return arr.filter(function(item,index,arr){
//         return arr.indexOf(item)==index;
//     })
// }
// console.log(unqiarr([2,3,1,3,2,12,3,-11.1,1,1,1,0]))


//map实现
// var map=function(arr,callback,pthis){
//     var len=arr.length;
//     var result=new Array(len);
//     for(var i=0;i<len;i++){
//        if(i in arr) result[i]=callback.call(pthis,arr[i],i,arr);
//     }
//     return result;
// }

//变量提升指的是，无论是哪里的变量在一个范围内声明的，那么JavaScript引擎会将这个声明移到范围的顶部
//全局变量的危险之处在于其他人可以创建相同名称的变量，然后覆盖你正在使用的变量
//预防的方法也有很多。其中最常用的方法是创建一个包含其他所有变量的全局变量： var applicationName = {};
//还有一种方法是将所有的代码封装到一个自动执行的函数中，这样一来，所有声明的变量都声明在该函数的范围内。
//(function(){ var a = "abc"; })();
//闭包允许一个函数定义在另一个外部函数的作用域内，即便作用域内的其他东西都消失了，它仍可以访问该外部函数内的变量。
//如果应聘者能够说明，在for/next循环中使用闭包却不声明变量来保存迭代变量当前值的一些风险，那就应该给对方加分
//外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大


//4，cookie和session的优缺点： 回答完标准答案后，我讲了一些自己项目中session共享的实现，快速画简要建构图，然后简单说了一下nginx反向代理配置tomcat集群，tomcat里配置session由某个开源插件来实现，session的产生由redis服务器来完成。 面试官刚好也研究过，问我单点登录怎么解决，我session共享关键问题解决后，只需要加台用户中心服务器即可。 实际上单点登录我并没有完全实现，但这堆应付面试是无伤大雅的。真要实现单点登录环境，相信给一周时间也能做出demo。 这时发现一个细节，面试官手里的纸上写了一些我说过的技术点，在设计模式和内存管理后面又加了一个单点登录。
//2，讲讲单例模式： 回答完概念后，我讲了饿汉和懒汉单例的实现，spring的默认单例运行。然后罗列一堆开源项目使用的单例+线程池。 最后讲了自己项目中使用的单例。还讲了适用范围的，此处单例仅适用于程序内部，系统中程序只允许启动一个实例的单例实现。


//如果JS函数需要实现重载的话，可以根据arguments对象的length值进行判断。
// function overLoading() { 　　// 根据arguments.length，对不同的值进行不同的操作 　
// 　switch(arguments.length) { 　　　　
//     case 0: 　　　　　
// 　/*操作1的代码写在这里*/ 　　　　　　break; 　　　　
// case 1: 　　　　　　/*操作2的代码写在这里*/ 　　　　　　break; 　　　
// 　case 2: 　　　　　　/*操作3的代码写在这里*/ 　　　　　　 　　
// //后面还有很多的case...... 
// } }

// var people = { values: ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"] };
// //我们希望people对象拥有一个find方法，当不传任何参数时，就会把people.values里面的所有元素返回来；当传一个参数时,就把first-name跟这个参数匹配的元素返回来；当传两个参数时，则把first-name和last-name都匹配的才返回来。因为find方法是根据参数的个数不同而执行不同的操作的，所以，我们希望有一个addMethod方法，能够如下的为people添加find的重载：



//什么是Ajax AJAX全称为“Asynchronous JavaScript and XML"(异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术，AJAX提供与服务器异步通讯的能力，从而使用户从请求/响应的循环中解脱出来。 
//ajax的优势 1.通过异步模式，提升了用户体验。 2.优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用。 3.AJAX引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了服务器负载。
// ajax的局限性 1.不能实时请求和响应服务器数据。 2.不支持浏览器回退功能。 3.不能提交多媒体数据，比如图片，文件等。 
//工作流程 1.客户端产生js的事件 2.创建XMLHttpRequest对象 3.对XMLHttpRequest进行配置 4.通过AJAX引擎发送异步请求 5.服务器端接收请求并且处理请求，返回html或者xml内容 6.XML调用一个callback()处理响应回来的内容 7.页面局部刷新 
//实现步骤 1.声明verify()函数和xmlhttp全局变量 2.创建XML对象 3.注册回调对象 xmlhttp.onreadystatechange = callback; 4.设置服务器连接信息 xmlhttp.open("GET","verifyUser.action?name="+encodeURI(username),true); 5.发送数据


//1.match
// match方法属于String正则表达方法. 
// 语法: str.match(regexp)
// str:要进行匹配的字符串. regexp:一个正则表达式(或者由RegExp()构造成的正则表达式)
// match的用法主要区分就是,正则表达式是否有全局标示g.
// 1)如果有g全局标志,那么返回的数组保存的是,所有匹配的内容.
// 2)如果没有g全局标志,那么返回的数组arr.arr[0]保存的是完整的匹配.arr[1]保存的是第一个括号里捕获的字串,依此类推arr[n]保存的是第n个括号捕获的内容.
// 复制代码
// <script type="text/javascript">
// <!--
// str = "abbb34eftab0modabbbbb6";
// var reg = /a(b)+(\d+)/i;// then test: var reg = /a(b)+(\d+)/ig
// var arr = str.match(reg);
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + "---->"); //根据返回结果可知如果有g全局,那么返回所有匹配[abbb34,ab0,abbbbb6]
//                                       //如果没有g全局,那么返回数组arr[0]为匹配的完整字串后面是括号里的捕获[abbb34,b,34];
// }
// //-->
// </script>

// 2.exec
// 与match方法不同exec属于正则表达式的方法.
// 语法:var result1 = regexp.exec(str);
// regexp:正则表达式 str:要匹配的字串
// exec与match的关联就是exec(g有没有都无影响)就等价于不含有g全局标志的match.即返回数组arr[0]为匹配的完整串.其余的为括号里捕获的字符串.
// 仍以上面的为例:
// 复制代码
// <script type="text/javascript">
// <!--
// str = "abbb34eftab0modabbbbb6";
// var reg = /a(b)+(\d+)/ig;// then test: var reg = /a(b)+(\d+)/i
// var arr = reg.exec(str);
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + "---->"); //根据返回结果可知无论是否有g全局.返回的数组arr[0]为匹配的完整字串后面是括号里的捕获[abbb34,b,34]即与不含有g的match等价
// }
// //-->
// </script>
//主要区分match具有g和没有g的区别.然后没有g的时候与exec是等价的.
//而exec返回的串类型不受g影响但具有g时候会驱动lastIndex可以模拟遍历所有匹配.可以与match具有g的时候等价


//闭包封装
// (function(){
//     var q=0;
//      var w=0;
//     var exp={};
//     function add(m,n){
//         return m+n;
//     }
//     exp.setA=function(a){
//         q=a;
//     }
//     exp.getA=function(){
//         return a;
//     }
//     exp.setB=function(b){
//        w=b;
//     }
//     exp.sum=function(){
//         return add(q,w);
//     }
//     window.init=exp;
// })();
// init.setA(1);
// init.setB(2);
// init.sum();

//构建类
//第一种构造函数法
//用构造函数模拟"类"，在其内部用this关键字指代实例对象。
//主要缺点是，比较复杂，用到了this和prototype，编写和阅读都很费力
//新建实例cat1，cat3互不影响
// function cat(){
//     // console.log(this)
//     this.name='mao';
// }
// cat.prototype.sound=function(){
//     console.log("miao");
// }
// cat.prototype.age=function(x){
//     this.age=x;
// }
// cat.prototype.getage=function(){
//     return this.age;
// }
// var cat1=new cat();
// console.log(cat1.name);//mao
// cat1.age(2)
// console.log(cat1.getage())//2
// console.log(cat1)//cat { name: 'mao', age: 2 }
// var cat3=new cat();
// cat3.age(3);
// console.log(cat3.name);//mao
// console.log(cat3.getage())//3
// console.log(cat3)//cat { name: 'mao', age: 3 }
// console.log(cat1.age);//2

//第二种Object.create()法
//不能实现私有属性和私有方法，实例对象之间也不能共享数据
// var Cat={
//     name:'mao',
//     sound:function(){
//         console.log('miao');
//     }
// }

// var cat2=Object.create(Cat);
// console.log(cat2.name);//mao
// console.log(cat2.sound());//miao
// cat2.age=3;
// console.log(cat2.age)//3
// console.log(cat2)//{ age: 3 }
// var cat6=Object.create(Cat);
// console.log(cat6.name);
// console.log(cat6.sound());
// cat6.age=6;
// console.log(cat6.age)//6
// console.log(cat6)//{ age: 6 }

// //兼容Object.create
// if(!Object.create){
//     Object.create=function(o){
//         function F(){}
//         F.prototype=o;
//          return new F();
//     }
// }

//极简主义法
// var Cat={
//     createNew:function(){
//         var cat={};
//         cat.name='mao';
//         cat.sound=function(){
//             console.log('miao');
//         }
//         return cat;
//     }
// };

// var cat4=Cat.createNew();
// cat4.sound()//miao
// cat4.age=4;
// console.log(cat4.age)//4
// console.log(cat4)//{ name: 'mao', sound: [Function], age: 4 }
// var cat5=Cat.createNew();
// cat5.sound();
// cat5.age=5;
// console.log(cat5.age);//5
// console.log(cat5)//{ name: 'mao', sound: [Function], age: 5 }
// console.log(cat4.age);//4
// //类的继承
// var Animal={
//     createNew:function(){
//         var animal={};
//         animal.sleep=function(){
//             console.log('sleep');
//         }
//         return animal;
//     }
// }
// // //继承Animal
// var Qcat={
//     createNew:function(){
//         var cat=Animal.createNew();
//         cat.name='mao';
//         cat.sound=function(){
//             console.log("miao");
//         }
//         return cat;
//     }
// }
// var cat7=Qcat.createNew();
// cat7.sleep();//sleep
// cat7.sound();//miao

// //私有属性和私有方法:只要不是定义在cat上的方法都是私有的
// //内部变量sound，外部无法读取，只有通过cat的公有方法makeSound()来读取。
// // 数据共享:有时候，我们需要所有实例对象，能够读写同一项内部数据。
// //这个时候，只要把这个内部数据，封装在类对象的里面、createNew()方法的外面即可
// var Qcat={
//     eat:'fish',             //共享数据
//     createNew:function(){
//         var cat=Animal.createNew();
//         cat.name='mao';
//         var soundword='miao';        //私有
//         cat.sound=function(){
//             console.log(soundword);
//         }
//         cat.eatwhat=function(){
//             console.log(Qcat.eat);
//         }
//         cat.eatchange=function(x){
//             Qcat.eat=x;
//         }
//         return cat;
//     }
// }
// var cat8 = Qcat.createNew();
// console.log(cat8.soundword);//undefined
// cat8.sound()//miao
// cat8.eatwhat();//fish
// var cat9 = Qcat.createNew();
// console.log(cat9.soundword);//undefined
// cat9.sound()//miao
// cat9.eatwhat();//fish
// cat8.eatchange('allfish');
// cat8.eatwhat();//allfish;
// cat9.eatwhat();//allfish;
// cat9.age=9;
// console.log(cat8)//{ sleep: [Function],name: 'mao',sound: [Function],eatwhat: [Function],eatchange: [Function] }
// console.log(cat9);//{ sleep: [Function], name: 'mao',sound: [Function],eatwhat: [Function],eatchange: [Function] ,age: 9}


//单例模式
//系统中一个类只有一个实例而且该实例易于外界访问，从而方便对实例个数的控制并节约系统资源。
// var  single=function(fn){
//     var result;
//     return function(){
//         result||(result=fn.apply(this,arguments));
//     }
// }
// var createElement=function(){
//     return document.body.appendChild(document.createElement("div"));
// }

//重复字符串
//对Javascript的继承及原型属性的知识，它同时也检验了开发者是否能扩展内置数据类型的方法
// String.prototype.repeatify=String.prototype.repeatify||function(times){
//     var str="";
//     for(var i=0;i<times;i++){
//         str+=this;
//     }
//     return str;
// }

//原生DOM接口中，用于表示元素宽度的有哪三个属性
//clientWidth：元素内容+padding;
//offsetWidth：元素内容+padding+border;
//scrollWidth：完整内容+padding 包括隐藏的滚动区域。
//1. clientHeight和clientWidth用于描述元素内尺寸，是指 元素内容+内边距 大小，不包括边框（IE下实际包括）、外边距、滚动条部分

// 2. offsetHeight和offsetWidth用于描述元素外尺寸，是指 元素内容+内边距+边框，不包括外边距和滚动条部分

// 3. clientTop和clientLeft返回内边距的边缘和边框的外边缘之间的水平和垂直距离，也就是左，上边框宽度

// 4. offsetTop和offsetLeft表示该元素的左上角（边框外边缘）与已定位的父容器（offsetParent对象）左上角的距离

// 5. offsetParent对象是指元素最近的定位（relative,absolute）祖先元素，递归上溯，如果没有祖先元素是定位的话，会返回null
// 6. scrollWidth和scrollHeight是元素的内容区域加上内边距加上溢出尺寸，当内容正好和内容区域匹配没有溢出时，这些属性与clientWidth和clientHeight相等

// 7. scrollLeft和scrollTop是指元素滚动条位置，它们是可写的

//找到数组中首个质数
// function isPrime(ele,index,arr){
//     var start=2;
//     while(start<(ele>>1)){
//         if(ele%start<1) return false;
//         start++;
//     }
//     return (ele>1);
// }
// console.log([6,8,9,5].findIndex(isPrime));

// h5之前，存储主要是用cookies。cookies缺点有在请求头上带着数据，大小是4k之内。主Domain污染。
// 主要应用：购物车、客户登录
// 对于IE浏览器有UserData，大小是64k,只有IE浏览器支持。
// 解决4k的大小问题
// 解决请求头常带存储信息的问题
// 解决关系型存储的问题
// 跨浏览器

// 1.本地存储localstorage
// 存储方式：
// 以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。
// 大小：每个域名5M
// if(window.localStorage){
//  alert('This browser supports localStorage');
// }else{
//  alert('This browser does NOT support localStorage');
// }
// getItem //取记录
// setIten//设置记录
// removeItem//移除记录
// key//取key所对应的值
// clear//清除记录
// 存储的内容：数组，图片，json，样式，脚本。。。（只要是能序列化成字符串的内容都可以存储）

// 2.本地存储sessionstorage
// HTML5 的本地存储 API 中的 localStorage 与 sessionStorage 在使用方法上是相同的，区别在于 sessionStorage 在关闭页面后即被清空，而 localStorage 则会一直保存。

// 3.离线缓存（application cache）
// 本地缓存应用所需的文件
// 使用方法：
// ①配置manifest文件
// 页面上：
// <!DOCTYPE HTML>
// <html manifest="demo.appcache">
// ...
// </html>
// Manifest 文件：
// manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。
// manifest 文件可分为三个部分：
// ①CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
// ②NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
// ③FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）
// 完整demo：
// CACHE MANIFEST
// # 2016-07-24 v1.0.0
// /theme.css
// /main.js
// NETWORK:
// login.jsp
// FALLBACK:
// /html/ /offline.html
// 服务器上：manifest文件需要配置正确的MIME-type，即 "text/cache-manifest"。
// 如Tomcat:<mime-mapping>
//      <extension>manifest</extension>
//      <mime-type>text/cache-manifest</mime-type>
// </mime-mapping>
// 常用API：
// 核心是applicationCache对象，有个status属性，表示应用缓存的当前状态：
// 0（UNCACHED） :  无缓存， 即没有与页面相关的应用缓存
// 1（IDLE） : 闲置，即应用缓存未得到更新
// 2 （CHECKING） : 检查中，即正在下载描述文件并检查更新
// 3 （DOWNLOADING） : 下载中，即应用缓存正在下载描述文件中指定的资源
// 4 （UPDATEREADY） : 更新完成，所有资源都已下载完毕
// 5 （IDLE） :  废弃，即应用缓存的描述文件已经不存在了，因此页面无法再访问应用缓存
// 相关的事件：
// 表示应用缓存状态的改变：
// checking : 在浏览器为应用缓存查找更新时触发
// error : 在检查更新或下载资源期间发送错误时触发
// noupdate : 在检查描述文件发现文件无变化时触发
// downloading : 在开始下载应用缓存资源时触发
// progress：在文件下载应用缓存的过程中持续不断地下载地触发
// updateready : 在页面新的应用缓存下载完毕触发
// cached : 在应用缓存完整可用时触发
// Application Cache的三个优势：
// ① 离线浏览
// ② 提升页面载入速度
// ③ 降低服务器压力
// 离线缓存与传统浏览器缓存区别：
// 1. 离线缓存是针对整个应用，浏览器缓存是单个文件
// 2. 离线缓存断网了还是可以打开页面，浏览器缓存不行
// 3. 离线缓存可以主动通知浏览器更新资源

// 5.IndexedDB
// 索引数据库 (IndexedDB) API（作为 HTML5 的一部分）对创建具有丰富本地存储数据的数据密集型的离线 HTML5 Web 应用程序很有用。同时它还有助于本地缓存数据，使传统在线 Web 应用程序（比如移动 Web 应用程序）能够更快地运行和响应。
// 异步API：
// 在IndexedDB大部分操作并不是我们常用的调用方法，返回结果的模式，而是请求——响应的模式，比如打开数据库的操作
// 这样，我们打开数据库的时候，实质上返回了一个DB对象，而这个对象就在result中。由上图可以看出，除了result之外。还有几个重要的属性就是onerror、onsuccess、onupgradeneeded（我们请求打开的数据库的版本号和已经存在的数据库版本号不一致的时候调用）。这就类似于我们的ajax请求那样。我们发起了这个请求之后并不能确定它什么时候才请求成功，所以需要在回调中处理一些逻辑。
// 数据存储：
// indexedDB中没有表的概念，而是objectStore，一个数据库中可以包含多个objectStore，objectStore是一个灵活的数据结构，可以存放多种类型数据。也就是说一个objectStore相当于一张表，里面存储的每条数据和一个键相关联。
// 我们可以使用每条记录中的某个指定字段作为键值（keyPath），也可以使用自动生成的递增数字作为键值（keyGenerator），也可以不指定。选择键的类型不同，objectStore可以存储的数据结构也有差异。　

// 4.Web SQL
// 关系数据库，通过SQL语句访问
// Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。
// 支持情况：
//  Web SQL 数据库可以在最新版的 Safari, Chrome 和 Opera 浏览器中工作。
// 核心方法：
// ①openDatabase：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
// ②transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
// ③executeSql：这个方法用于执行实际的 SQL 查询。
// 打开数据库：
// var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024,fn);
// //openDatabase() 方法对应的五个参数分别为：数据库名称、版本号、描述文本、数据库大小、创建回调
// 执行查询操作：
// var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
// db.transaction(function (tx) { 
//    tx.executeSql('CREATE TABLE IF NOT EXISTS WIN (id unique, name)');
// });
// 插入数据：　
// var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
// db.transaction(function (tx) {
//    tx.executeSql('CREATE TABLE IF NOT EXISTS WIN (id unique, name)');
//    tx.executeSql('INSERT INTO WIN (id, name) VALUES (1, "winty")');
//    tx.executeSql('INSERT INTO WIN (id, name) VALUES (2, "LuckyWinty")');
// });
// 读取数据：
// db.transaction(function (tx) {
//    tx.executeSql('SELECT * FROM WIN', [], function (tx, results) {
//       var len = results.rows.length, i;
//       msg = "<p>查询记录条数: " + len + "</p>";
//       document.querySelector('#status').innerHTML +=  msg;
     
//       for (i = 0; i < len; i++){
//          alert(results.rows.item(i).name );
//       }
     
//    }, null);
// });
// 由这些操作可以看出，基本上都是用SQL语句进行数据库的相关操作，如果你会MySQL的话，这个应该比较容易用。

//原文链接：http://caibaojian.com/css-hacks.html
// 只在IE下生效 <!--[if IE]> 这段文字只在IE浏览器上显示 <![endif]--> 
// 只在IE6下生效 <!--[if IE 6]> 这段文字只在IE6浏览器上显示 <![endif]--> 
// 只在IE6以上版本生效 <!--[if gt IE 6]> 这段文字只在IE6以上版本IE浏览器上显示 <![endif]--> 
// 只在IE7上不生效 <!--[if ! IE 7]> 这段文字在非IE7浏览器上显示 <![endif]--> 
// 非IE浏览器生效 <!--[if !IE]><!--> 这段文字只在非IE浏览器上显示 <!--<![endif]-->
// 
//跨域
// 设置 document.domain
// 原理：相同主域名不同子域名下的页面，可以设置document.domain让它们同域
// 限制：同域document提供的是页面间的互操作，需要载入iframe页面
// 下面几个域名下的页面都是可以通过document.domain跨域互操作的：
//  http://a.com/foo, http://b.a.com/bar, http://c.a.com/bar。 但只能以页面嵌套的方式来进行页面互操作，比如常见的iframe方式就可以完成页面嵌套：
 //URL:http://a.com/bar
 // var ifr=document.createElement("iframe");
 // ifr.src="http://b.a.com/bar";
 // ifr.onload=function(){
 //    var ifrdoc=ifr.contentDocument||ifr.contentDocument.document;
 //    ifrdoc.getElementById("foo").innerHTML;
 // };
 // ifr.style.display="none";
 // document.body.appendChild(ifr);
 // //上述代码所在的URL是http://a.com/foo，它对http://b.a.com/bar的DOM访问要求后者将 document.domain往上设置一级：document.domain = 'a.com'
 // document.domain只能从子域设置到主域，往下设置以及往其他域名设置都是不允许的，

//  有src的标签
// 原理：所有具有src属性的HTML标签都是可以跨域的，包括<img>, <script>
// 限制：需要创建一个DOM对象，只能用于GET方法
// 在document.body中append一个具有src属性的HTML标签， src属性值指向的URL会以GET方法被访问，该访问是可以跨域的。
// 其实样式表的<link>标签也是可以跨域的，只要是有src或href的HTML标签都有跨域的能力。
// 不同的HTML标签发送HTTP请求的时机不同，例如<img>在更改src属性时就会发送请求，而script, iframe, link[rel=stylesheet]只有在添加到DOM树之后才会发送HTTP请求：
// var img = new Image();
// img.src = 'http://some/picture';        // 发送HTTP请求
// var ifr = $('<iframe>', {src: 'http://b.a.com/bar'});
// $('body').append(ifr);                  // 发送HTTP请求

// JSONP
// 原理：<script>是可以跨域的，而且在跨域脚本中可以直接回调当前脚本的函数。
// 限制：需要创建一个DOM对象并且添加到DOM树，只能用于GET方法
// JSONP利用的是<script>可以跨域的特性，跨域URL返回的脚本不仅包含数据，还包含一个回调：
// 然后在我们在主站http://a.com中，可以这样来跨域获取http://b.a.com的数据：
// // URL: http://a.com/foo
// var callback = function(data){
//     // 处理跨域请求得到的数据
// };
// var script = $('<script>', {src: 'http://b.a.com/bar'});
// $('body').append(script);
// 其实jQuery已经封装了JSONP的使用，我们可以这样来：
// $.getJSON( "http://b.a.com/bar?callback=callback", function( data ){
//     // 处理跨域请求得到的数据
// });
// $.getJSON与$.get的区别是前者会把responseText转换为JSON，而且当URL具有callback参数时， jQuery将会把它解释为一个JSONP请求，创建一个<script>标签来完成该请求。
// 和所有依赖于创建HTML标签的方式一样，JSONP也不支持POST，而GET的数据是放在URL里的。 虽然[RFC 2616][rfc2610]没有提到限制到多少， 但提到了服务器可以对自己认为比较长的URL返回414状态码。一般来讲URL限长是在2000字符左右。

// navigation 对象
// 原理：iframe之间是共享navigator对象的，用它来传递信息
// 要求：IE6/7
// 有些人注意到了IE6/7的一个漏洞：iframe之间的window.navigator对象是共享的。 我们可以把它作为一个Messenger，通过它来传递信息。比如一个简单的委托：
// // a.com
// navigation.onData(){
//     // 数据到达的处理函数
// }
// typeof navigation.getData === 'function' 
//     || navigation.getData()
// // b.com
// navigation.getData = function(){
//     $.get('/path/under/b.com')
//         .success(function(data){
//             typeof navigation.onData === 'function'
//                 || navigation.onData(data)
//         });
// }
// 与document.navigator类似，window.name也是当前窗口所有页面所共享的。也可以用它来传递信息。 同样蛋疼的办法还有传递Hash（有些人叫锚点），这是因为每次浏览器打开一个URL时，URL后面的#xxx部分会保留下来，那么新的页面可以从这里获得上一个页面的数据。

// 跨域资源共享（CORS）
// 原理：服务器设置Access-Control-Allow-OriginHTTP响应头之后，浏览器将会允许跨域请求
// 限制：浏览器需要支持HTML5，可以支持POST，PUT等方法
// 前面提到的跨域手段都是某种意义上的Hack， HTML5标准中提出的跨域资源共享（Cross Origin Resource Share，CORS）才是正道。 它支持其他的HTTP方法如PUT, POST等，可以从本质上解决跨域问题。
// 例如，从http://a.com要访问http://b.com的数据，通常情况下Chrome会因跨域请求而报错：
// 错误原因是被请求资源没有设置Access-Control-Allow-Origin，所以我们在b.com的服务器中设置这个响应头字段即可：
// Access-Control-Allow-Origin: *              # 允许所有域名访问，或者
// Access-Control-Allow-Origin: http://a.com   # 只允许所有域名访问

// window.postMessage
// 原理：HTML5允许窗口之间发送消息
// 限制：浏览器需要支持HTML5，获取窗口句柄后才能相互通信
// 这是一个安全的跨域通信方法，postMessage(message,targetOrigin)也是HTML5引入的特性。 可以给任何一个window发送消息，不论是否同源。第二个参数可以是*但如果你设置了一个URL但不相符，那么该事件不会被分发。看一个普通的使用方式吧：
// // URL: http://a.com/foo
// var win = window.open('http://b.com/bar');
// win.postMessage('Hello, bar!', 'http://b.com'); 
// // URL: http://b.com/bar
// window.addEventListener('message',function(event) {
//     console.log(event.data);
// });


//判断数据类型
// function isType(type){
//     return function(obj){
//         return Object.prototype.toString.call(obj)=='[object '+type+']';
//     }
// }
// var isArray=isType('Array');
// console.log(isArray([1,2]));

// var Type={};
// for(var i=0,type;type=['Array','String','Number'][i++];){
//     (function(type){
//         Type['is'+type]=function(obj){
//             return Object.prototype.toString.call(obj)=='[object '+type+']';
//         }
//     })(type);
// }
// console.log(Type.isArray([]));

// var getSingle=function(fn){
//     var ret;
//     return function(){
//         return ret || ret=fn.apply(this,arguments);
//     }
// }
//函数科里化
// var curring=function(fn){
//     var argus=[];
//     return function(){
//         if(arguments.length==0){
//             return fn.apply(this,argus);
//         }
//         else{
//             Array.prototype.push.apply(argus,arguments);
//             // console.log(arguments.callee);
//             return arguments.callee;
//         }
//     }
// }

// var cost=(function(){
//     var money=0;
//     return function(){
//         for(var i=0,l=arguments.length;i<l;i++){
//             money+=arguments[i];
//         }
//         return money;
//     }
// })();

// var cost=curring(cost);
// console.log(cost(100));
// console.log(cost());


//惰性加载函数
//嗅探浏览器的操作
// var addEvent=(function(){
//     if(window.addEventListener){
//         return function(ele,type,handle){
//             ele.addEventListener(type,handle,false);
//         }
//     }
//     if(window.attachEvent){
//         return function(ele,type,handle){
//             ele.attachEvent(on+'type',handle);
//         }
//     }
// })()

//惰性载入
// var addEvent=function(){
//     if(window.addEventListener){
//         addEvent=function(ele,type,handle){
//             ele.addEventListener(type,handle,false);
//         }
//     }
//     if(window.attachEvent){
//         addEvent=function(ele,type,handle){
//             ele.attachEvent(on+'type',handle);
//         }
//     }
//     addEvent(ele,type,handle);
// }

// 单例模式
//非透明单例
// var single=function(name){
//     this.name=name;
// }
// single.prototype.getName=function(){
//     console.log(this.name);
// }
// single.getInstance=function(){
//     var instance=null;
//     return function(){
//         if(!instance){
//             instance=new single();
//         }
//         return instance;
//     }
// }
//透明单例模式
//用代理实现单例模式
//js 中的单例
//全局变量：使用命名空间，使用闭包封装私有变量
// var myApp={};
// myApp.namespace=function(name) {
//     // body...
//     var parts=name.split(".");
//     console.log(parts);
//     var current=myApp;
//     for(var i in parts){
//         if(!current[parts[i]]){
//             current[parts[i]]={};
//         }
//         console.log(current)
//         current=current[parts[i]];
//     }
// };

// // myApp.namespace('event');
// // console.log(myApp);
// myApp.namespace('dom.style.width');
// console.log(myApp);

//惰性单例
// var createLoginLayer=(function(){
//     var div;
//     return function(){
//         if(!div){
//             div=document.createElement("div");
//             div.innerHTML="登陆";
//             div.style.display="none";
//             document.body.appendChild(div);
//         }
//         return div;
//     }
// })();
// document.getElementsByTagName('button')[0].onclick=function(){
//     var login=createLoginLayer();
//     login.style.display="block";
// }


//通用惰性单例
// var single=function(fn){
//     var result;
//     return function(){
//         return result || (result=fn.apply(this,arguments));
//     }
// };

// var createLogin=function(){
//     var div=document.createElement('div');
//     div.innerHTML="登陆";
//     div.style.display='none';
//     document.body.appendChild(div);
//     return div;
// };
// var createSingleLogin=single(createLogin);
// document.getElementById("button").onclick=function(){
//     var Loginlayer=createSingleLogin();
//     Loginlayer.style.display="block";
// }

//ajx渲染时只绑定一次
// var bindEvent=single(function(){
//     document.getElementsByTagName('button')[0].onclick=function(){
//         console.log(1);
//     }
//     return true;
// });
// var rend=function(){
//     console.log("开始");
//     bindEvent();
// };
// rend();
// rend();
// rend();

//通行的Javascript的模板规范共有两种：CommonJS 和 AMD
//commonjs即为服务器端模块的规范。 commonjs的规范： 根据commonjs规范，一个单独的文件就是一个模块。加载模块使用require方法，该方法读取一个文件并执行，最后返回文件内部的exports对象
//commonjs模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存
//commonjs规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。AMD规范则是非同步加载模块，允许指定回调函数。由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以commonjs规范比较适用。但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。
// 可以理解为AMD即为能在客户端环境，并且能兼容服务器端模块的一种模块规范
// AMD的模块定义：
// AMD规范使用define方法定义模块
//Define第一个参数表达依赖的模块数组，第二个为加载完依赖的模块数组后，模块执行的函数
// AMD的模块加载定义：跟commonjs一样，AMD也采用require()语句来加载模块，但是与commonjs不同的是，它要求有两个参数：
// 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数
//AMD和CMD对比
// 1,对于依赖的模块，AMD是提前执行，CMD是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD推崇 as lazy as possible.
// 2,CMD推崇依赖就近，AMD推崇依赖前置
// CMD
// define(function(require, exports, module) {
// var a = require('./a')
// a.doSomething()
// // 此处略去 100 行
// var b = require('./b') // 依赖可以就近书写
// b.doSomething()
// // ... 
// })

// // AMD 默认推荐的是
// define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
// a.doSomething()
// // 此处略去 100 行
// b.doSomething()
// ...
// }) 
// 虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。
// 3,AMD的API默认是一个当多个用，CMD的API 严格区分，推崇职责单一。比如AMD里，require分全局require和局部require，都叫require。CMD里，没有全局 require，而是根据模块系统的完备性，提供seajs.use来实现模块系统的加载启动。CMD里，每个API都简单纯粹。
// ES6模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。commonjs和AMD模块，都只能在运行时确定这些东西。比如，commonjs模块就是对象，输入时必须查找对象属性。

//AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
// AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
// 　　require([module], callback);
// 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。如果将前面的代码改写成AMD形式，就是下面这样：
// 　　require(['math'], function (math) {
// 　　　　math.add(2, 3);
// 　　});
// math.add()与math模块加载不是同步的，浏览器不会发生假死。所以很显然，AMD比较适合浏览器环境。

// //require.js的诞生，
// //（1）实现js文件的异步加载，避免网页失去响应；
// //（2）管理模块之间的依赖性，便于代码的编写和维护。
// require.js的加载
// 使用require.js的第一步，是先去官方网站下载最新版本。
// 下载后，假定把它放在js子目录下面，就可以加载了。
// 　　<script src="js/require.js"></script>
// 有人可能会想到，加载这个文件，也可能造成网页失去响应。解决办法有两个，一个是把它放在网页底部加载，另一个是写成下面这样：
// 　　<script src="js/require.js" defer async="true" ></script>
// async属性表明这个文件需要异步加载，避免网页失去响应。IE不支持这个属性，只支持defer，所以把defer也写上。
// 加载require.js以后，下一步就要加载我们自己的代码了。假定我们自己的代码文件是main.js，也放在js目录下面。那么，只需要写成下面这样就行了：
// 　　<script src="js/require.js" data-main="js/main"></script>
// data-main属性的作用是，指定网页程序的主模块。在上例中，就是js目录下面的main.js，
// 这个文件会第一个被require.js加载。由于require.js默认的文件后缀名是js，
// 所以可以把main.js简写成main。
// 上一节的main.js，我把它称为"主模块"，意思是整个网页的入口代码。它有点像C语言的main()函数，所有代码都从这儿开始运行。
// 下面就来看，怎么写main.js。
// 如果我们的代码不依赖任何其他模块，那么可以直接写入javascript代码。
// 　　// main.js
// 　　alert("加载成功！");
// 但这样的话，就没必要使用require.js了。真正常见的情况是，主模块依赖于其他模块，这时就要使用AMD规范定义的的require()函数。
// 　　// main.js
// 　　require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
// 　　　　// some code here
// 　　});
// require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
// require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。
// 下面，我们看一个实际的例子。
// 假定主模块依赖jquery、underscore和backbone这三个模块，main.js就可以这样写：
// 　　require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
// 　　　　// some code here
// 　　});
// require.js会先加载jQuery、underscore和backbone，然后再运行回调函数。主模块的代码就写在回调函数中。
// 上一节最后的示例中，主模块的依赖模块是['jquery', 'underscore', 'backbone']。默认情况下，require.js假定这三个模块与main.js在同一个目录，文件名分别为jquery.js，underscore.js和backbone.js，然后自动加载。
// 使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
// 　　require.config({
// 　　　　paths: {
// 　　　　　　"jquery": "jquery.min",
// 　　　　　　"underscore": "underscore.min",
// 　　　　　　"backbone": "backbone.min"
// 　　　　}
// 　　});
// 上面的代码给出了三个模块的文件名，路径默认与main.js在同一个目录（js子目录）。如果这些模块在其他目录，比如js/lib目录，则有两种写法。一种是逐一指定路径。
// require.config({
// 　　　　paths: {
// 　　　　　　"jquery": "lib/jquery.min",
// 　　　　　　"underscore": "lib/underscore.min",
// 　　　　　　"backbone": "lib/backbone.min"
// 　　　　}
// 　　});
// 另一种则是直接改变基目录（baseUrl）。
// 　　require.config({
// 　　　　baseUrl: "js/lib",
// 　　　　paths: {
// 　　　　　　"jquery": "jquery.min",
// 　　　　　　"underscore": "underscore.min",
// 　　　　　　"backbone": "backbone.min"
// 　　　　}
// 　　});
// 如果某个模块在另一台主机上，也可以直接指定它的网址，比如：
// 　　require.config({
// 　　　　paths: {
// 　　　　　　"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
// 　　　　}
// 　　});
// require.js要求，每个模块是一个单独的js文件。这样的话，如果加载多个模块，就会发出多次HTTP请求，会影响网页的加载速度。因此，require.js提供了一个优化工具，当模块部署完毕以后，可以用这个工具将多个模块合并在一个文件中，减少HTTP请求数。
// 理论上，require.js加载的模块，必须是按照AMD规范、用define()函数定义的模块。但是实际上，虽然已经有一部分流行的函数库（比如jQuery）符合AMD规范，更多的库并不符合。那么，require.js是否能够加载非规范的模块呢？
// 回答是可以的。
// 这样的模块在用require()加载之前，要先用require.config()方法，定义它们的一些特征。
// 举例来说，underscore和backbone这两个库，都没有采用AMD规范编写。如果要加载它们的话，必须先定义它们的特征。
// 　　require.config({
// 　　　　shim: {

// 　　　　　　'underscore':{
// 　　　　　　　　exports: '_'
// 　　　　　　},
// 　　　　　　'backbone': {
// 　　　　　　　　deps: ['underscore', 'jquery'],
// 　　　　　　　　exports: 'Backbone'
// 　　　　　　}
// 　　　　}
// 　　});
// require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
// 比如，jQuery的插件可以这样定义：
// 　　shim: {
// 　　　　'jquery.scroll': {
// 　　　　　　deps: ['jquery'],
// 　　　　　　exports: 'jQuery.fn.scroll'
// 　　　　}
// 　　}
// require.js还提供一系列插件，实现一些特定的功能。
// domready插件，可以让回调函数在页面DOM结构加载完成后再运行。
// 　　require(['domready!'], function (doc){
// 　　　　// called once the DOM is ready
// 　　});
// text和image插件，则是允许require.js加载文本和图片文件。
// 　　define([
// 　　　　'text!review.txt',
// 　　　　'image!cat.jpg'
// 　　　　],

// 　　　　function(review,cat){
// 　　　　　　console.log(review);
// 　　　　　　document.body.appendChild(cat);
// 　　　　}
// 　　);

//相较于传统网页应用，单页应用将 MVC 前置到了浏览器端：
// 控制器前置，单页应用将路由处理放在浏览器端，即在浏览器端直接响应浏览器地址的变化，分发到对应的路由，向用户呈现对应的界面。
// 以小块组件为功能元件，类似于传统网页中的 Ajax 组件，单页应用以小的组件为功能元件，在路由变化时，不再刷新整个页面，而是组合这些小的组件，替换变化的部分。
// 数据层前置，与 Ajax 组件一个明显的区别是，单页应用在浏览器端通常有一层实实在在的数据层，而服务端则退化成了完全的数据 API。浏览器端的数据层会封装服务端 API，供上层的视图层调用
// 无刷新体验，这个应该是最显著的有点，由于路由分发直接在浏览器端完成，页面是不刷新，对用户的响应非常及时，因此提升了用户体验；
// 完全的前端组件化，前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改和调整；
// API 共享，如果你的服务是多端的（浏览器端、Android、iOS、微信等），单页应用的模式便于你在多个端共用 API，可以显著减少服务端的工作量。容易变化的 UI 部分都已经前置到了多端，只受到业务数据模型影响的 API，更容易稳定下来，便于提供鲁棒的服务；
// 组件共享，在某些对性能体验要求不高的场景，或者产品处于快速试错阶段，借助于一些技术（Hybrid、React Native），可以在多端共享组件，便于产品的快速迭代，节约资源。
// 单页应用的优点有时候也是缺点：

// 首次加载大量资源，要在一个页面上为用户提供产品的所有功能，在这个页面加载的时候，首先要加载大量的静态资源，这个加载时间相对比较长；
// 较高的前端开发门槛，MVC 前置，对前端工程师的要求提高了，不再是『切切图，画画页面这么简单』；同时工作量也会增加数倍，开发这类应用前端工程师的数量往往多于后端；
// 不利于 SEO，单页页面，数据在前端渲染，就意味着没有 SEO，或者需要使用变通的方案。

// 我先解释一下单页应用，和传统网站相比，他更接近于移动端应用程序，其核心就是将路由控制在前端工程师的手里。核心技术除了上面的Ajax，还有pushState，又有人将两者合称为PJAX。 先说什么是路由，路由可以理解为你网站域名后面的内容，比如www.abc.com/p/123这样的网址，后面的/p/123就标明了一个路径。可以类比于我们电脑的磁盘，当我在路径的位置输入C:/p/123的时候，我希望看到C盘下p文件夹下123文件夹的内容，当123变成了456，显示的内容应该有些变化。如果456文件夹存在，显示该文件夹的内容；如果不存在，则会弹出错误信息提示不存在。对应我们的网站，如果当/p/123变成/p/456的时候，也应该给出对应的显示。路由由前端控制的含义，就是说，网站url的变化与对应的显示由前端处理。你的整个网站实际上只有一个页面，前端根据url的变化，通过Ajax异步加载需要的数据，然后通过pushState操作浏览器的历史记录，达到与浏览普通网站同样的效果。 SPA最大的优点，大概就是响应速度了。当然，使用SPA对前端的技术提出了相对比较高的要求。使用SPA的一般情况，是你要做一个类似于安卓app的网站，如淘宝的手机站和Gmail，都是相当典型的SPA。不过，虽然现在SPA很多，并不是所有的场景都适合使用SPA的。
// 前端路由
// 前端的路由和后端的路由在实现技术上不一样，但是原理都是一样的。在 HTML5 的 history API 出现之前，前端的路由都是通过 hash 来实现的，hash 能兼容低版本的浏览器。如果我们把上面例子中提到的 3 个页面用 hash 来实现的话，它的 URI 规则中需要带上 #。
// http://10.0.0.1/
// http://10.0.0.1/#/about
// http://10.0.0.1/#/concat
// Web 服务并不会解析 hash，也就是说 # 后的内容 Web 服务都会自动忽略，但是 JavaScript 是可以通过 window.location.hash 读取到的，读取到路径加以解析之后就可以响应不同路径的逻辑处理。
// history 是 HTML5 才有的新 API，可以用来操作浏览器的 session history (会话历史)。基于 history 来实现的路由可以和最初的例子中提到的路径规则一样。
// http://10.0.0.1/
// http://10.0.0.1/about
// http://10.0.0.1/concat
// 用户可能都察觉不到该访问地址是 Web 服务实现的路由还是前端实现的路由。
// 从性能和用户体验的层面来比较的话，后端路由每次访问一个新页面的时候都要向服务器发送请求，然后服务器再响应请求，这个过程肯定会有延迟。而前端路由在访问一个新页面的时候仅仅是变换了一下路径而已，没有了网络延迟，对于用户体验来说会有相当大的提升。


// function xssCheck(str,reg){
//   return str ? str.replace(reg ||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,function (a, b) {
//     if(b){
//       return a;
//     }else{
//       return{
//         '<':'&lt;',
//         '&':'&amp;',
//         '"':'&quot;',
//         '>':'&gt;',
//         "'":'''
//       }[a]
//     }
//   }): '';
// }

// for(vari=0,tags=document.querySelectorAll('iframe[src],frame[src],script[src],link[rel=stylesheet],object[data],embed[src]'),tag;tag=tags[i];i++){
//   var a = document.createElement('a');
//   a.href= tag.src||tag.href||tag.data;
//   if(a.hostname!=location.hostname){
//     console.warn(location.hostname+'发现第三方资源['+tag.localName+']:'+a.href);
//   }
// }

// 首先我们需要一个白名单列表，用于放置网站允许第三方加载的url地址：
// var scriptList = [
//   location.hostname,
// ]
// 这里只是默认的只允许当前域名加载，打击爱可以根据自己的需要添加。
// 然后就是获取当前网页的所有script标签：
// varwebScript = document.querySelectorAll(‘script[src]‘);
// 在把当前的地址赋值varwebHost =location.hostname;至于为什么不放在for循环里，因为根据js优化规则，for循环里避免多次一样的赋值。
// 接下来就是for循环里的代码了：

// for(vari = 0;i < webScript.length;i++){
//   var a = document.createElement('a');  //建立一个新的a标签，方便取值
//   a.href= webScript[i].src; //把script里的src赋值给a标签里的href属性
//     if(a.hostname!= webHost){   //对比，是否为第三方资源
//     for(varj = 0;j < scriptList.length;j++){
//       if(a.hostname!= scriptList[i]){   //判断当前的第三方资源是否在白名单里
//         newImage().src = 'http://fecm.cn/Api/addVul/category/2';    //发送给FECM
//       }
//     }
//   }
// }

// 跨站脚本（Cross-site scripting，通常简称为XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了HTML以及用户端脚本语言
// 常用的XSS攻击手段和目的有：

// 盗用cookie，获取敏感信息。
// 利用植入Flash，通过crossdomain权限设置进一步获取更高权限；或者利用Java等得到类似的操作。
// 利用iframe、frame、XMLHttpRequest或上述Flash等方式，以（被攻击）用户的身份执行一些管理动作，或执行一些一般的如发微博、加好友、发私信等操作。
// 利用可被攻击的域受到其他域信任的特点，以受信任来源的身份请求一些平时不允许的操作，如进行不当的投票活动。
// 在访问量极大的一些页面上的XSS可以攻击一些小型网站，实现DDoS攻击的效果。
