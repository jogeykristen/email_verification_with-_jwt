var inter = (arr1, arr2) => {
  console.log("arr1 = ", arr1, "arr2 = ", arr2);
  var output = [];
  for (x of arr1) {
    if (arr2.includes(x)) {
      output.push(x);
    }
  }
  console.log("output = ", output);
};

arr1 = ["a", "m", "q", "r"];
arr2 = ["m", "s", "a"];
inter(arr1, arr2);
