/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time
*/

function timeConversion(s) {
    /*
     * Write your code here.
     */
    var midnight = "00";
    var am = s.indexOf("AM");
    var pm = s.indexOf("PM");
    var ampm = s.slice(0, -2);
    var time = ampm.slice(0, 2);

    if (0 < am && am < 100) {
        if (time != 12) {
            s = ampm;
        } else if (time == 12) {
            s = ampm.replace(time, midnight);
        }
    } else if (0 < pm && pm < 100) {
        if (time != 12) {
            var y = parseInt(s) + 12;
            s = ampm.replace(time, y);
        }   else if (time == 12){
            s = ampm.replace(time, 12);
        }
    }
    return s;
}
