//* Cho mảng gồm các học sinh (Họ tên, lớp, ĐTB)
//* Hãy tính tổng điểm theo từng lớp

const students = [
    {hoTen: "Le Van A", lop: "A", diem: 7.5},
    {hoTen: "Do Van B", lop: "B", diem: 6.8},
    {hoTen: "Nguyen Thi C", lop: "A", diem: 8},
    {hoTen: "Dao Van D", lop: "C", diem: 9},
    {hoTen: "Hoàng Thi E", lop: "B", diem: 8.5},
    {hoTen: "Vu Van F", lop: "B", diem: 7.2},
];

// Tương tự Câu 11
function solveDiem(object, property, need) {
    return object.reduce((sum, object) => {
        let key = object[property];
        if(!sum[key]) sum[key] = 0; // Khác chỗ này
        sum[key] += object[need];
        return sum;
    }, {})
}

let sum = solveDiem(students, 'lop', 'diem');
console.log(sum);