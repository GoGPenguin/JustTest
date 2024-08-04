//* Tạo một hàm truyền vào một array gồm các phần tử là object
//* gồm(product, quantity, price) để tính toán tổng giá và trả về dưới dạng một số

//? Cách 1: hàm cộng vào sum bình thường
function getTotalPrice1(array) {
    let sum = 0;
    for(let product of array) {
        sum += product.quantity * product.price;
    }
    return sum;
}

//? Cách 2: dùng hàm reduce()
//      reduce(...): thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.
//      cú pháp: arr.reduce((biến tích lũy, phần tử đang xử lí) => {do sth...}, giá trị cho biến tích lũy)
let getTotalPrice2 = (array) => {

    return array.reduce((sum, array) => {return sum + array.quantity * array.price}, 0);
}

// Cách khai báo hàm khác: let sum = (a, b) => {do sth...}

const test1 = getTotalPrice1([{product: "Sữa", quantity: 1, price: 7000}]);
console.log(test1); // 7000

const test2 = getTotalPrice2([
    {product: "Sữa", quantity: 1, price: 7000},
    {product: "Ngũ cốc", quantity: 1, price: 50000}
]);
console.log(test2);