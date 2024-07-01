var twoSum = (arr1, target) => {
  console.log("arr1 = ", arr1, "target = ", target);
  for (let x = 0; x <= arr1.length - 2; x++) {
    for (let j = x + 1; j <= arr1.length - 1; j++) {
      if (arr1[x] + arr1[j] == target) {
        return console.log(`the target numbers are = ${arr1[x]},${arr1[j]}`);
      }
    }
  }
  console.log("no numbers found");
};

var arr1 = [2, 7, 11, 15];
twoSum(arr1, 22);
