/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
    var p = 0;
    var n = 0;
    var z = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            p += 1;
        } else if (arr[i] < 0) {
            n += 1;
        } else {
            z += 1;
        }
    }
    var ratioP = p/arr.length;
    var ratioN = n/arr.length;
    var ratioZ = z/arr.length;

    console.log (ratioP.toFixed(6));
    console.log (ratioN.toFixed(6));
    console.log (ratioZ.toFixed(6));
}