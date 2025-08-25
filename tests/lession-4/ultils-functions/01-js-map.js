const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Tao mang moi tang 10% neu <90, giam 5% neu >=90

let new_scores = scores.filter(n => n >= 90);
console.log(new_scores.map(n => n * 5 / 100));

new_scores = scores.filter(n => n < 90);
console.log(new_scores.map(n => n * 10 / 100));

// từ numbers, chuyển thành mảng chuỗi
console.log(numbers.map(n=>n.toString()));

// từ numbers Nhân đôi giá trị
console.log(numbers.map(n => n * 2));