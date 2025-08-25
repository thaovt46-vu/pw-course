const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Tính tổng các giá trị trong scores
console.log(scores.reduce((key, val) => key + val));

//Tính tích các giá trị trong numbers.
console.log(numbers.reduce((key, mul) => key * mul));

//Tính tổng các giá trị trong expenses.
console.log(expenses.reduce((key, val) => key + val));