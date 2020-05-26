var j =  Math.round(Math.random() * 100);

for (i = 0; i < 101; i++) {
        
         if (i !== j) {
           document.write(i + "This is not the right number" +j +"<br>")
        }
      
         
        else {
           document.write(i +"This is the right number"+ j + "<br>");break}  
        

    } 