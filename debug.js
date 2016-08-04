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

function getUrlParam(sUrl, sKey) {
    var index=sUrl.indexOf("?");
      var str2=sUrl.slice(index+1);
    var arr=new Array();
    if(sKey==null){
        return str2.length<=0?{}:str2;
        }
    else if(sKey!=null){
        var str3=str2.split("&");
        var str4=[];
        for(var item in str3){
            var items=str3[item].split("=");
            if(items[0]==sKey){
                arr.push(items[1]);
            }
        }
        return arr.length<=0?"h":arr;
    }
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))
