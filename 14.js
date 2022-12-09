// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between 
//point (2, 2) and point(6 10);
 var x1 = 2;
 var x2 = 10;
 var y1 = 2;
 var y2 = 10;

 function slope(x1,y1,x2,y2){
 if(x2- x1 != 0){
    return (y2 -y1)/(x2 - x1);
 }
 return Number.MAX_VALUE;
}
console.log("slope is " + slope(x1,y1,x2,y2));