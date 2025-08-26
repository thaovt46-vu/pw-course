const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

//Thay khoảng trắng bằng "." trong phoneNumber.
console.log(phoneNumber.replace(/ /g, "."));

//Thay "lỗi" bằng "bug" trong report.
console.log(report.replace("lỗi", "bug"));

//Thay "," bằng "." trong numbersStr.
console.log(numbersStr.replace(/,/g, "."));