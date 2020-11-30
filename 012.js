/*
Counting Valleys
*/


function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let currLevel = 0;
    let valleys = 0;
    let Step = path.split("")

    for (var i = 0; i < steps; i++){
        if (Step[i] == "U"){
            currLevel ++;
            if (currLevel == 0) {
                valleys ++;
            }
        } else {
            currLevel --;
        }
    }
    return valleys;
}