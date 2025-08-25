const numbers = [1, 2, 3]
let total = 0;
//In lần lượt từng phần tử của numbers
numbers.forEach((val, index) => {
    console.log(`phần tủ ${index} :, ${val}`);
    total += val;
});
//Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
console.log(`Tổng các phần tử trong mảng: ${total}`);

//Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
const double = numbers.map(n => n * 2);
console.log(`Mảng mới nhân đôi phần tử là :${double}`);
