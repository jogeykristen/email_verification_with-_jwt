var arrayAnagram = (items) => {
  console.log("array = ", items);
  var charCount = {};
  for (let x of items) {
    var word = x;
    var sortedWord = word.split("").sort().join("");
    console.log(sortedWord);

    if (!charCount[sortedWord]) {
      charCount[sortedWord] = [word];
    } else {
      charCount[sortedWord].push(word);
    }
  }
  console.log("charCount = ", charCount);
};

var message = ["eat", "tea", "tan", "ate", "nat", "bat"];
arrayAnagram(message);
