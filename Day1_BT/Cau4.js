//* Viết hàm kiểm tra số nguyên tố

function isPrime(n) {
    // Hong có nhớ vì sao làm như z nữa T.T
    // Nói chung là số nguyên n chạy tới căn bậc 2 của nó mà có 1 số chia hết cho nó thì nó không phải số nguyên tố, và ngược lại
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(!(n%i)) return false;
    }
    return true;
};

let a = 6;
console.log(isPrime(a));