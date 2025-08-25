const str = 'Playwright';
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
let reversedArr = [];
for (let cha of str) {
    // In lần lượt từng ký tự của str
    console.log(cha);
    reversedArr.unshift(cha);
}
//In mảng đảo ngược
console.log(`${reversedArr}`);

//tìm vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
  let firstIndex=arr.indexOf(3);
  let lastIndex=arr.lastIndexOf(3);
  console.log(`Vị trí đầu tiên 3 trong mảng: ${firstIndex}`);
  console.log(`Vị trí cuối cùng 3 trong mảng: ${lastIndex}`);


//lọc các phần tử xuất hiện 1 lần trong dupArr
let uniqueArr = [];
for (let i of dupArr) {
    if (dupArr.indexOf(i) === dupArr.lastIndexOf(i)) {
        uniqueArr.push(i);
    }
}
console.log(uniqueArr);