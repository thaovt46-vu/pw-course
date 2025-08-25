const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//kiểm tra tất cả các giá trị trong scores có > 70 không
const check_score = scores.every(n => n > 70);
console.log(check_score);

//Kiểm tr tất cả giá trị trong ages có > 15 không
const check_age = ages.every(n => n > 15);
console.log(check_age);

//Kiem tra tat ca cac tu trong worlds co do dai > 3 khoong
const check_length = words.every(n => n.length > 3);
console.log(check_length);

//Loc cac gia tri trong scores > 80
const new_scores = scores.filter(n => n > 80);
console.log(new_scores);

//Loc cac gia tri trong ages > 20

const new_ages = ages.filter(n => n > 20);
console.log(new_ages);

// Loc cac tu trong work co do dai > 5
console.log(words.filter(n => n.length > 5));
