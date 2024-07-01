var merger = (arr1, arr2) => {
  console.log("arr 1 = ", arr1, "arr 2 = ", arr2);
  var final = [];
  var merged = [...arr1, ...arr2];
  console.log("merged = ", merged);
  merged.forEach((element) => {
    if (!final.includes(element)) {
      final.push(element);
    }
  });
  console.log("final", final);
  for (let i = 0; i <= final.length - 1; i++) {
    for (let j = 0; j <= final.length - 1; j++) {
      if (final[j] > final[j + 1]) {
        let temp = final[j];
        final[j] = final[j + 1];
        final[j + 1] = temp;
      }
    }
  }
  console.log("sorted = ", final);
};

arr1 = [1, 3, 4, 5, 2, 6];
arr2 = [3, 5, 4, 2, 7];
merger(arr1, arr2);
