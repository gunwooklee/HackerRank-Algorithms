/*
In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large
*/

function aVeryBigSum(ar) {
    var sum = ar.reduce ((a,b)=> (a+b));
    return sum;
}