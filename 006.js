/*
Print a staircase of size  using # symbols and spaces.
*/
function staircase(n) {
    for (var i = 0; i < n; i++){
        var shop = "#"
        var space = " "
        console.log(space.repeat((n-1)-i) + shop.repeat(i+1));
    }
}