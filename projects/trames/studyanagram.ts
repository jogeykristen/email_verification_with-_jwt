var ana = (str1: string, str2: string) => {
  console.log("str1 = ", str1, "str2 = ", str2);
  var char1: any = {};
  var char2: any = {};
  for (let x of str1) {
    if (!char1[x]) {
      char1[x] = 0;
    }
    char1[x]++;
  }
  for (let y of str2) {
    if (!char2[y]) {
      char2[y] = 0;
    }
    char2[y]++;
  }
  console.log("char 1 = ", char1, "char 2 = ", char2);
  for (let z in char1) {
    console.log("char1 = ", char1[z], "char 2 = ", char2[z]);
    if (char1[z] != char2[z]) {
      return console.log("not anagram");
    }
  }
  console.log("anagram");
};

ana("lbstea", "silent");
