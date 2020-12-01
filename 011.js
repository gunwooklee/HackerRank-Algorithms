/*
Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
*/

/*function sockMerchant(n, ar) {
    var sortArray = ar.sort()
    var pairArray = [];
    var counts = 1;
    for (var i = 0; i < n; i++){
        if (sortArray[i] == sortArray[i+1]){
            counts ++;
        }
    }
    var result =  Math.ceil(counts/2)
    return result;
}*/

function sockMerchant(n, ar) {
    var res = 0;
        ar.sort();
        for(let i=0; i<n;i++){
            if(ar[i] == ar[i+1]){
                i++;
                res++;
               }
        }
    return res;
    }