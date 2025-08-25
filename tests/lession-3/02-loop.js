//Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//In bảng cửu chương từ 2 đến 9.
for (let i = 2; i < 10; i++) {
    console.log(`Bange cửu chương ${i}:`)
    for (let j = 1; j < 11; j++) { console.log(`${i} x ${j} = ${i * j}`) }
}

//Tạo mảng chứa các số lẻ từ 1 đến 99
const oddNumber = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        oddNumber.push(i);
    }
}
console.log(oddNumber);

//In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

//Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho
const income = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 120 },
    { "month": 3, "total": 140 },
    { "month": 4, "total": 150 },
    { "month": 5, "total": 170 },
    { "month": 6, "total": 180 },
    { "month": 7, "total": 200 },
    { "month": 8, "total": 310 },
    { "month": 9, "total": 330 },
    { "month": 10, "total": 350 },
    { "month": 11, "total": 400 },
    { "month": 12, "total": 500 },
];
let totalIncome = 0;
for (let i = 0; i < income.length; i++) {
    totalIncome += income[i].total;
}
console.log(totalIncome);