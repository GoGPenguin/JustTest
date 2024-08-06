//* Viết hàm viết tắt câu (VD: Hello anh em -> HAE)

function standsFor(s) {
    let arr = s.split(' ');
    // split chuỗi s
    return arr.map(item => item[0]).join('').toUpperCase();
}

console.log(standsFor('Hello anh em'));
console.log(standsFor('Good morning Baby'));
console.log(standsFor('I love you'));