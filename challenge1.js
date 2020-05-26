var a =  Math.round(Math.random() * 100);
var b =  Math.round(Math.random() * 100);
var c =  Math.round(Math.random() * 100);
var d =  Math.round(Math.random() * 100);
var e =  Math.round(Math.random() * 100);
var f =  Math.round(Math.random() * 100);

var arraya =[a, b, c, d, e, f];

document.write(arraya.sort());
document.write("<br>" + Math.max(...arraya));