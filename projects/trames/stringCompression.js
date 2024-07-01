// var compressed = (str) => {
//   console.log("str = ", str);
//   var compressed = {};
//   for (let x of str) {
//     if (!compressed[x]) {
//       compressed[x] = 0;
//     }
//     compressed[x]++;
//   }
//   console.log("compressed = ", Object.keys(compressed));
//   var last = Object.keys(compressed)
//     .map((key) => {
//       return key + compressed[key];
//     })
//     .join("");
//   console.log("last = ", last);
// };

var compressed = (str) => {
  console.log("str = ", str);
  var compressed = {};
  for (let x of str) {
    if (!compressed[x]) {
      compressed[x] = 0;
    }
    compressed[x]++;
  }
  console.log("compressed = ", compressed);
  var last = Object.keys(compressed)
    .map((key) => {
      console.log("key = ", key, "compressed key = ", compressed[key]);
      return key + compressed[key];
    })
    .join("");
  console.log("last = ", last);
};

compressed("aaabbbbcc");
