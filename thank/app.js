
// bai1
let bai1 = (a, b) => a>b ? a : b;

// bai3
let ttcn = {
    id: 1,
    name: "Thanh",
    email: "email@gmail.com"
}

function bai3(ttcn){
    for(let i in ttcn) if (typeof(ttcn[i]) === "string") console.log(i);
}

bai3(ttcn)

// bai4

let ktrNgto = function(num){
    if(num < 2) return false;
    else if(num == 2) return true;
    else if(num %2 ==0 ) return false;
    else for(let i = 3; i<Math.sqrt(num); i+=2) if(num%i===0) return false;
    return true;
}

console.log(ktrNgto(123));

// bai5
let bai5 = function(fileName){
    return fileName.replace(fileName.match(/.*\./g), "");
};

console.log(bai5("index.html"));

// bai6

let bai6 = function(str){
    return str.split(" ").map(i => i.charAt(0).toUpperCase()).join("");
}

console.log(bai6("Hello anh em"));

// bai7

let bai7 = function(str){
    return str.split("").map(i => i.toUpperCase() === i ? i.toLowerCase(): i.toUpperCase()).join("");
}

console.log(bai7("ksjUGI"));

//bai8

const myFriends = [1, 2, "Nam", "Hung", 4, 5];

let bai8 = function(arr){
    return myFriends.filter( i => typeof(i) === "string" ? true : false);
}

console.log(bai8(myFriends));

// cau9 

const test = ([
    {product: "Sữa", quantity: 1, price:7000},
    {product: "Ngũ cốc", quantity: 1, price: 50000}
])

let cau9 = function(arr){
    return arr.reduce((sum, i) => sum+= i.price , 0);
}

console.log(cau9(test));

// cau10

let cau10 = function(str, num){
    return str.split(" ").filter( i => i.length <= num ? true : false).join(" ");
}

console.log(cau10("I love foood Code", 4));

// cau11

const students = [
    {hoTen: "Le Van A", gioiTinh: "Nam"},
    {hoTen: "Nguyen Thi B", gioiTinh: "Nu"}
]

let cau11 = function(arr){
    let ans ={nam: [], nu: []}
    for(let i of arr) if(i.gioiTinh === "Nam") ans.nam.push(i.hoTen); 
        else ans.nu.push(i.hoTen);
    return ans;
}

console.log(cau11(students))

// cau12

const students2 = [
    {hoTen: "Thanh", lop: "A", diem: 7.5},
    {hoTen: "Phu", lop: "B", diem: 8},
    {hoTen: "Na", lop: "A", diem: 15}
]

let cau12 = function(arr){
    let ans = {};
    arr.forEach(e => {
        if(ans[e.lop] == undefined) ans[e.lop] = e.diem
        else ans[e.lop] += e.diem});
    return ans;
}

console.log(cau12(students2));