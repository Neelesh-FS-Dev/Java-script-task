//TASK 1

var side1=5;
var side2=6;
var side3=7;   

var s=(side1+side2+side3)/2;
var area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

//TASK 2
function leapyear(year)
{
    return(year%100==0) ? (year%400==0) : (year%4==0);
}
console.log(leapyear(2016));
console.log(leapyear(2017));
console.log(leapyear(2018));
console.log(leapyear(2019));
console.log(leapyear(20122));
console.log(leapyear(2024));

//TASK 3

for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
}

//TASK 4
function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))

//TASK 5
function sumtriple(x,y){
    if (x==y){
        return 3*(x+y);
    }
    else{
        return (x+y);
    }
}

console.log(sumtriple(10,20));
console.log(sumtriple(10,10));

// Task 6

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))


// Task 7
function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(testhundred(10));
  console.log(testhundred(90));
  console.log(testhundred(99));
  console.log(testhundred(199));
  console.log(testhundred(200));


// Task 8
function pos_neg(x,y)
{
    if ((x<0 && y>0)||x>0 && y<0) {
        return true;
    } else {
        return false;
    }
}
console.log(pos_neg(2,2));
console.log(pos_neg(2,-2));
console.log(pos_neg(-2,2));
console.log(pos_neg(-2,-2));

// Task 9

function remo_char(str,char_pos)
{
    p1=str.substring(0,char_pos);
    p2=str.substring(char_pos+1, str.length);
    return(p1+p2);
}
console.log(remo_char("python",0));
console.log(remo_char("python",3));
console.log(remo_char("python",5));

// Task 10

function test(x)
{
    if (x%3==0 || x%7==0) {
        return true;
    } else {
        return false;
    }
}
console.log(test(12));
console.log(test(15));
console.log(test(17));
console.log(test(22));


// Task 11
function start(str){
    if(str.length<4){
        return false;
    }
    front = str.substring(0,4);
    if (front=='Java') {
        return true;
        
    } else {
        return false;
    }
}

console.log(start("Javascript"));
console.log(start("Java"));
console.log(start("python"));

// Task 12
function check(x,y){
    if (x==8||y==8){
        return true;
    }
    if (x+y==8 || Math.abs(x-y)==8) {
        return true;
        
    } else {
        return false;
    }
}
console.log(check(7,8));
console.log(check(7,8));
console.log(check(24,32));
console.log(check(17,18));


// Task 13
function time(num){
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    return hours + ":" + minutes;         
}
console.log(time(71));
console.log(time(120));
console.log(time(91));
console.log(time(111));


// Task 14
function middle_elements(a, b) 
{
  var arr = []
  arr.push(a[1], b[1]);

    return arr;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); 