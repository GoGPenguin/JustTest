//* Cho một mảng danh sách các học sinh của một lớp.
//* Hãy nhóm các học sinh Nam, Nữ thành 1 nhóm.

const students = [
    {hoTen: "Le Van A", gioiTinh: "Nam"},
    {hoTen: "Do Van B", gioiTinh: "Nam"},
    {hoTen: "Nguyen Thi C", gioiTinh: "Nu"},
    {hoTen: "Dao Van D", gioiTinh: "Nam"},
    {hoTen: "Hoàng Thi E", gioiTinh: "Nu"},
    {hoTen: "Vu Van F", gioiTinh: "Nam"}
];

function group(object, property, need) {

    // Sử dụng hàm reduce()
    return object.reduce((result, object) => {
        let key = object[property]; // Nam, Nam, Nu, Nam, Nu, Nam

        // Nếu result[Nam] rỗng thì cho result[Nam] là mảng, tương tự result[Nu]
        if(!result[key]) result[key] = [];

        // Thêm object[hoTen] vào cuối mảng result[Nam], tương tự result[Nu]
        result[key].push(object[need])
        // result[key].push(object)

        return result;
    }, {})
}

let grouped = group(students, 'gioiTinh', 'hoTen')

console.log(grouped);
