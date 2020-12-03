/*
Repeat Strings
*/

function repeatedString(s, n) {
    let c = 0,
        ca = 0,
        r = n % s.length

    for (let i = s.length; 0 < i-- ;) {
      if (s.charAt(i) == 'a') {
        ++c

        if (i < r)
          ++ca
      }
    }

    return ((n - r) / s.length * c) + ca
  }
