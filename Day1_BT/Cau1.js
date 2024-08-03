//* Viết hàm nhận 2 tham số và trả về số lớn nhất

// Cách 1: dùng hàm
function getMax(a, b) {
    // Sử dụng toán tử 3 ngôi để trả về số lớn hơn
    return a > b ? a : b;
}

let a = parseInt(prompt("Nhập số a: "));
let b = parseInt(prompt("Nhập số b: "));

console.log("Số lớn nhất là: ", getMax(a, b));

// Cách 2: dùng Math
console.log("Số lớn nhất là: ", Math.max(a, b));