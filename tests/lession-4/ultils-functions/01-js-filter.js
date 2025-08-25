const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Loc cac gia tri trong scores > 80
const new_scores = scores.filter(n => n > 80);
console.log(new_scores);

//Loc cac gia tri trong ages > 20

const new_ages = ages.filter(n => n > 20);
console.log(new_ages);

// Loc cac tu trong work co do dai > 5
console.log(words.filter(n => n.length > 5));


