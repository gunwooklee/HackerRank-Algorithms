/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(arr) {
    // Write your code here
    var n = arr.length;
    var diag1 = 0;
    var diag2 = 0;
    
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1 += arr[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                diag2 += arr[i][j];
            }
        }
    }
    var a = diag1 - diag2;
    var b = diag2 - diag1;
    
    if (a > b){
        return a;
    } else {
        return b;
    }
}