/*
Grading Students
*/

function gradingStudents(grades) {
    // Write your code here
   var gl = grades.length;

for (var i = 0; i < gl; i++){
    var firstDigit = grades[i].toString()[0]
    var fD = parseInt(firstDigit)
    var secondDigit = grades[i].toString()[1]
    var sD = parseInt(secondDigit)
    var remainder = sD % 5

    if (grades[i] < 38) {
        grades[i] = grades [i];
    } else if (38 <= grades[i] && grades[i] <= 40){
        grades[i] = 40;
    } else if (40 <= grades[i] && 3 <= remainder) {
        grades[i] += 5 - remainder
    }
    }
    return grades;
}

