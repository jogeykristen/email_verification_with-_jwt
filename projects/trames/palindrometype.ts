var palindrome = (str: string) => {
  console.log("Str = ", str);
  var reversed = "";
  for (let x = str.length - 1; x >= 0; x--) {
    reversed += str[x];
  }
  console.log("reversed = ", reversed);
  if (str == reversed) {
    return console.log("palindrome");
  }
  console.log("not palindrome");
};
palindrome("malayalap");
