/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
*/

function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;

    for (var i = 0; i < 3; i++) {
        if (a[i] > b [i]) {
            alice += 1;
        } else if (a[i] < b[i]) {
            bob += 1;
        }
    }
    var alibob = [alice, bob];
    return alibob;
}