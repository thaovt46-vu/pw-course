const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Kiểm tra scores có giá trị nào >80 không
console.log(scores.some(n => n > 80));

// Kiểm tra ages có giá trị nào < 18 không
console.log(ages.some(n => n > 18));

// Kiểm tra words có từ nào dài > 5 không
console.log(words.some(n => n.length > 5));