//* Viết hàm viết tắt câu (VD: Hello anh em -> HAE)

function standsFor1(s) {
    let arr = s.split(' ');
    // split chuỗi s
    let ss = "";
    for (let word of arr) ss += word[0]; // lấy kí tự đầu của mỗi từ
    return ss.toUpperCase();
}

console.log(standsFor1('Hello anh em'));
console.log(standsFor1('Good morning Baby'));
console.log(standsFor1('I love you'));