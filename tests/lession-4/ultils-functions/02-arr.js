const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];
//push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
numbers.push(4);
console.log(numbers);
names.push("David");
console.log(names);

//pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
numbers.pop();
console.log(numbers);

//unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
const names1 = ["Alice", "Bob", "Charlie"];
numbers.unshift(0);
names1.unshift("David");
console.log(numbers);
console.log(names1);


//shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
const numbers1 = [1, 2, 3, 4]
numbers1.shift();
console.log(numbers1);
