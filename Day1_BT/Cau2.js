//* Nhập vào số nguyên n, và trả lại mảng answer theo yêu cầu:
//  + answer[i] == "FizzBuzz" nếu i chia hết cho 3 và 5
//  + answer[i] == "Fizz" nếu i chia hết cho 3
//  + answer[i] == "Buzz" nếu i chia hết cho 5
//  + answer[i] == i nếu i không đúng các điều kiện trên

var fizzBuzz = function (n) {
    let ans = [];
    for (let i = 1; i <= n; i++) {

        // Sử dụng if else: (!(i % 3) && !(i  % 5)) -> Kiểm tra i có chia hết cho 3 và 5 không?
        if (!(i % 3) && !(i % 5)) ans[i - 1] = "FizzBuzz";
        else if (!(i % 3)) ans[i - 1] = "Fizz";
        else if (!(i % 5)) ans[i - 1] = "Buzz";
        else ans[i - 1] = i.toString();
    }
    return ans;
};

// Có thể dùng console.log(fizzBuzz(3)) nhưng in ra ['1','2','Fizz'] (dấu ')
// Còn console.log(JSON.stringify(fizzBuzz(3))) in ra ["1", "2", "Fizz"] (dấu ")
console.log(JSON.stringify(fizzBuzz(3)));
console.log(JSON.stringify(fizzBuzz(5)));
console.log(JSON.stringify(fizzBuzz(15)));
