/*
Birthday Cake Candles
*/
function birthdayCakeCandles(candles) {
    // Write your code here
    var ace = 0;
    var max = candles.reduce(function(a, b) {
    return Math.max(a, b);});

    for (var i = 0; i < candles.length; i++){
        if (candles[i] == max) {
            ace += 1;
        }
    }
return ace;
}