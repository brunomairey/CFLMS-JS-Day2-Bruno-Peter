var values = [1, 7, -3, 9]
    // document.write(Math.max.apply(null, values+'<br><br>'))
    document.write(Math.max(...values));

    var grade_letter;
    var grade = [76, 85, 65, 93, 81, 101, 16];
    var result = [];

    for (i = 0; i < grade.length; i++) {
        if (grade[i] < 60) {
            grade_letter = "F";
            //result.push(grade_letter);
            document.write("<br>" + grade[i] + "=>" + grade_letter + "<br>")
        } 
        else if (grade[i] < 70 && grade[i] >= 60) {
            grade_letter = "D";
            //result.push(grade_letter);
            document.write("<br>" + grade[i] + "=>" + grade_letter + "<br>")
        }
        else if (grade[i] < 80 && grade[i] >= 70) {
            grade_letter = "C";
            //result.push(grade_letter);
            document.write("<br>" + grade[i] + "=>" + grade_letter + "<br>")
        }
        else if (grade[i] < 90 && grade[i] >= 80) {
            grade_letter = "B";
            //result.push(grade_letter);
            document.write("<br>" + grade[i] + "=>" + grade_letter + "<br>")
        }
        else if (grade[i] < 100 && grade[i] >= 90) {
            grade_letter = "A";
            //result.push(grade_letter);
            document.write("<br>" + grade[i] + "=>" + grade_letter + "<br>")
        }
        else {
            grade_letter = "You are out of scope";
            //result.push(grade_letter);
            document.write("<br>" + grade[i] + "=>" + grade_letter + "<br>")
        }

    }
    
    i=0;
    while (grade.length > i) {

    	if (grade[i] < 60) {
      grade_letter = "F";
      result.push(grade_letter);
      document.write(grade[i]+"=>"+grade_letter+"<br>")
    } else if (grade[i] < 80 && grade[i] >= 60) {
      grade_letter = "C";
      result.push(grade_letter);
      document.write(grade[i]+"=>"+grade_letter+"<br>")
    } else {
       grade_letter = "A";
      result.push(grade_letter);
      document.write(grade[i]+"=>"+grade_letter+"<br>")
    };i++

    }