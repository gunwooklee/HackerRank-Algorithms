/*
Number Line Jumps
*/
function kangaroo(x1, v1, x2, v2) {

    if ((x1-x2)%(v2-v1) == 0) {
        if (x1 > x2 && v1 > v2){
            return "YES";
        }  else if (x1 < x2 && v1 > v2) {
            return "YES";
        }   else if (x1 > x2 && v1 < v2) {
            return "YES";
        }  else if (x1 < x2 && v1 < v2) {
            return "NO"
        }
    } else {
        return "NO";
    }
}
// pract