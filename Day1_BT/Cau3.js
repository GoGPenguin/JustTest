//* Tạo Object thông tin cá nhân, viết hàm nhận tham số là Object, in ra value của những key có kiểu String của Object đó

//? For..of: duyệt từng phần tử trong object
//? For..in: duyệt từng thuộc tính của phần tử object đang duyệt

let peopleInfor = [
    {name: 'Thao', class: '23T_NHAT2', city: 'Da Nang', age: 18},
    {name: 'Na', class: '23T_DT3', city: 'Ha Tinh', age: 19},
    {name: 'Trang', class: '23T_DT4', city: 'Da Nang', age: 22},
    {name: 'Thang', class: '23T_NHAT2', city: 'Hue', age: 17},
    {name: 'Phu', class: '23T_DT3', city: 'Hue', age: 18},
    {name: 'Truong', class: '23T_DT4', city: 'Da Nang', age: 21}
]

// console.log(typeof(peopleInfor[1].city) == 'string');

for (let person of peopleInfor) {
    for (let key in person) {
        if(typeof(person[key])  === 'string'){
            console.log(`${key}: ${person[key]}`);
        }
        // console.log(`${key}: ${student[key]}`); //-> name: Man, age: 19...
        // console.log(student[key]); //-> Man, 19...
    }
    console.log('\n');
}