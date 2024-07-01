var anagram = (str1, str2) => {
  console.log("items = ", str1, "str2 = ", str2);
  charcount1 = {};
  charcount2 = {};
  for (let x of str1) {
    if (!charcount1[x]) {
      charcount1[x] = 0;
    }
    charcount1[x]++;
  }
  for (let x of str2) {
    if (!charcount2[x]) {
      charcount2[x] = 0;
    }
    charcount2[x]++;
  }
  console.log("charcoint 1 = ", charcount1);
  console.log("charcount2 = ", charcount2);

  for (let y in charcount1) {
    if (charcount1[y] != charcount2[y]) {
      return console.log("not anagram");
    }
  }
  console.log("anagram");
};
anagram("listen", "silent");
