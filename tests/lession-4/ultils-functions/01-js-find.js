const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
// TIm gia tri dau tien trong scores > 80
console.log(scores.find(n => n > 80));

//Tim gia tri dau tien trong ages > 20
console.log(ages.find(n => n > 20));

//Tim tu dau tien trong words cos do dai > 5
console.log(words.find(n => n.length > 5));


