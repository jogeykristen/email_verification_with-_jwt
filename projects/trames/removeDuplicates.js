// var removeDuplicate = (arr) => {
//   console.log("array = ", arr);
//   var removed = [];
//   arr.forEach((element) => {
//     if (!removed.includes(element)) {
//       removed.push(element);
//     }
//   });

//   //var removed = arr.filter((items, index) => arr.indexOf(items) === index);
//   console.log("removed = ", removed);
// };

var removeDuplicate = (arr) => {
  console.log("arr = ", arr);
  var removed = [];
  arr.forEach((element) => {
    if (!removed.includes(element)) {
      removed.push(element);
    }
  });
  console.log("removed = ", removed);
};
var arr = [1, 2, 3, 4, 4, 4, 5, 5, 1, 2, 6, 7];
removeDuplicate(arr);
