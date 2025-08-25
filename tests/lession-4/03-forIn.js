const str = 'Playwright';
const student = { "name": "Alex", "age": 10, "salary": 20 };
let total = 0;
let arrKeys=[];
//In lần lượt từng ký tự của str
for (let key in str) {
    console.log(str[key]);
}

//Tính tổng giá trị số trong student
for (let key in student) {
    if (typeof student[key] === "number") {
        total += student[key];
    }

}
    console.log(total); 

//Tạo màng chứa tên các thuộc tính của student
for(let key in student){
    arrKeys.push(key);
}
    console.log(arrKeys);