// var rotateArray = (items, k) => {
//   console.log("items = ", items, "k = ", k);
//   for (let i = 1; i <= k; i++) {
//     var latest = arr1.pop();
//     console.log("latest = ", latest);
//     items.unshift(latest);
//     console.log("Arr1 = ", items);
//   }
//   console.log("last = ", items);
// };

var rotateArray = (arr, num) => {
  for (i = 1; i <= num; i++) {
    var poped = arr.shift();
    console.log("poped = ", poped);
    arr.push(poped);
  }
  console.log("Arr = ", arr);
};

var arr1 = [4, 5, 6, 7, 8, 9];
rotateArray(arr1, 3);
