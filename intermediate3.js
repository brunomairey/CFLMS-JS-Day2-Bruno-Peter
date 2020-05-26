


var i = 1;
var msg = '*';
while (i < 7) {
    for(j=1; j<=i; j++) {
    document.write(msg * j + "<br>")};
    i++;

}

  


/* var i, j;
  //outer loop
  for(i=1; i <= 5; i++)
   {
   //inner loop
    for(j=1; j<=i; j ++)
   {
     document.write('*');
    }
     document.write('<br/>');
   }*/

/*for(i=1; i <= 5; i++) {
function repeatStringNumTimes(string, i) {
  if(i < 0) 
    return "";
  if(i === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, i - 1);
}
document.write(repeatStringNumTimes("<br>*", i));

}*/


/*var j="*"

for(i=1; i <= 5; i++) {

	document.write(i*j+"<br>")
}*/