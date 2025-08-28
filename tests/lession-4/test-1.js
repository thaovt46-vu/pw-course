let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K17";
const crew = ["Ngân", "Thảo", "Tùng"];
let distance = 0;
let hexadecimalNumber;

// Hàm launchShip
function launchShip(crew) {
    let message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}`;
    return message;
}
console.log(launchShip(crew));

// Hàm calculateDistance
function calculateDistance(speed, time) {
    distance = speed * time;
    return distance;
}
console.log(`Khoảng cách đến hành tinh là: ${calculateDistance(1000, 24)} km`);

// Hàm convertTimeToHex để chuyển đổi thời gian
function convertTimeToHex(time) {
    hexadecimalNumber = time.toString(16);
    return hexadecimalNumber;

}
console.log(`Thời gian 120s sang hệ thập lục phân là: ${convertTimeToHex(120)}`);

// Hàm decryptCode Option 1
function decryptCode(code) {
    let result = "";
    for (let charac of code) {
        if (charac >= "a" && charac <= "z") {
            result += charac.toUpperCase();
        } else if (charac >= "A" && charac <= "Z") {
            result += charac.toLowerCase();
        } else {
            result += charac;
        }


    }
    return result;
}
console.log(decryptCode("K17 Challenge"));
// Hàm decryptCode Option 2

function decryptCode2(code) {

    return result = code.replace(/[a-zA-Z]/g, ch => ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase());

}
console.log(decryptCode2("K17 Challenge"));

// Hàm decryptCode Option 3
function decryptCode3(code) {
    let result = "";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let ch of code) {
        if (lowercase.includes(ch)) {
            result += ch.toUpperCase();
        } else if (uppercase.includes(ch)) {
            result += ch.toLowerCase();
        } else {
            result += ch;
        }

    }
    return result;

}
console.log(decryptCode3("K17 Challenge"));

// Hàm returnToEarth
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();