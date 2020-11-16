/*
Given an array of integers, find the sum of its elements.
*/

function simpleArraySum(ar) {
    /* var sum = ar.reduce((a,b) => a+b);
     return sum;
     */
    // or
     var sum =0;
     for (var i = 0; i < ar.length; i++) {
     sum += ar[i];
 }
 return sum;
 }