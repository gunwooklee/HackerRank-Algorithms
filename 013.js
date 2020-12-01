/*
Jumping on the Clouds
*/

function jumpingOnClouds(c) {
    var n = 0;

    for (var i = 0; i < c.length - 1;) {
        i += (c[i+2] ? 1 : 2);
        n++;
  }
  return n;
}
