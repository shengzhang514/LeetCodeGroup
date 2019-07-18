var romanToInt = function(s) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  var num = 0;

  for (var i = 0; i < s.length; i++) {
    // console.log(s.substring(i, i+ 2));
    if (i + 1 < s.length && map[s.substring(i, i + 2)] != undefined) {
      num += map[s.substring(i, i + 2)];
      i++;
    } else {
      num += map[s.charAt(i)];
    }
  }

  return num;
};

module.exports = romanToInt;
