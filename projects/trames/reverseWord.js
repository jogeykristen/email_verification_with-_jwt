var reverseString = (str) => {
  console.log("str = ", str);
  var reversed = "";
  for (let x = str.length - 1; x >= 0; x--) {
    reversed += str[x];
  }
  console.log("reversed = ", reversed);
};
reverseString("rachel");
