/*
Mini-Max Sum
*/
function miniMaxSum(arr) {
    var n = arr.length;

    arr.sort(function(a, b) {
      return a - b;
    });

    function minipaxSum(){
      var sumUp = 0;
      for (var i = 0; i < n; i ++){
        sumUp += arr[i];
      }
      var minSum = sumUp - arr[0]
      var maxSum = sumUp - arr[arr.length - 1]
      var result = console.log(maxSum, minSum)
      return result;
    }
    var minimaxSum = minipaxSum();
}