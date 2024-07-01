var ana = function (str1, str2) {
  console.log("str1 = ", str1, "str2 = ", str2);
  var ana1 = {};
  var ana2 = {};
  for (let x of str1) {
    if (!ana1[x]) {
      ana1[x] = 0;
    }
    ana1[x]++;
  }
  for (let x of str2) {
    if (!ana2[x]) {
      ana2[x] = 0;
    }
    ana2[x]++;
  }
  console.log("ana1 = ", ana1, "ana2 = ", ana2);
  for (x in ana1) {
    if (ana1[x] !== ana2[x]) {
      return console.log("not anagram");
    }
  }
  console.log("anagram");
};
ana("listen", "silent");
