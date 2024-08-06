//* Lấy ra đuôi 1 file (VD: abc.html -> html, xyz.jar -> jar)

function getFileExtension(file) {
    let arr = file.split('.');
    // split('.'): tách chuỗi được ngăn cách bởi dấu '.'
    return arr.pop();
    // trả về phần tử cuối của mảng
};

console.log(getFileExtension('abc.html'));
console.log(getFileExtension('xyz.jar'));
console.log(getFileExtension('hello.txt'));