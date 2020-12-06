/*
Breaking the Records
*/
function breakingRecords(scores) {
    var a = 0;
    var b = 0;

    let [hi, lo] = [scores[0], scores[0]];

    for (let i = 1; i < scores.length; i++) {

        if (scores[i] > hi) {
            hi = scores[i];
            a++;
            }
        if (scores[i] < lo) {
            lo = scores[i];
            b++;
            }
}
    return [a, b];
}