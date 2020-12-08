/*
Sub-array Division
*/
function birthday(s, d, m) {
    var a = 0,
    arry = [];

    for(var i=0; i < s.length; i++){
        var result = s.slice([i], [i+m])
        if( result && result.length == m){
        arry.push(result)}
    }
    for(var j=0; j < arry.length; j++){
        if(arry[j].reduce((a,b)=>a+b) === d){
        a++;
    }
  }
  return a
}