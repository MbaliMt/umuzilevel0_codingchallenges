
function areaOfTriagle(a, b, c){
var semi;
semi = a + b + c;
semi = semi / 2;

var areaT = float((semi * (semi - float(a)) * (semi - float(b)) * (semi - Math.pow(c,0,5))));
return areaT;
}

console.log(areaOfTriagle(3, 4, 5));