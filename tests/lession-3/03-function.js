// Function multiply 2 numbers
function multiply(a, b) {
    const result = a * b;
    console.log(`${result}`);
}
multiply(4, 5);
multiply(9, 10);

//Function to findMin from number list
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
let result = findMin(1, 9, 0);
console.log(`Số nhỏ nhất là : ${result}`);
result = findMin(8, 7, 7);
console.log(`Số nhỏ nhất là : ${result}`);

// getTopStudents
function getTopStudents(students, threshold) {

    let newTop = [];
    for (let student of students) {
        if (student.score >= threshold) {
            newTop.push(student.name);
        }
    }
    return newTop;
}
const students = [
    { "name": "Thao", "score": 9 },
    { "name": "Ngan", "score": 10 },
    { "name": "Tien", "score": 7 },
    { "name": "Tien", "score": 8 }
];

console.log(`Top student :${getTopStudents(students, 8)}`);

//calculateInterest
function calculateInterest(principal, rate, years) {
    let total = principal + (principal * rate * years) / 100;
    return total;
}
console.log(calculateInterest(100000000, 5, 2));