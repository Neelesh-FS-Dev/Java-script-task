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