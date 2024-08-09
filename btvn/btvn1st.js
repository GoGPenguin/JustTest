//Câu 1: Viết hàm nhận 2 tham số và trả về số lớn nhất 
//(Keyword: function, built-in(Math) method)
let a=5,b=10;
function compare(a,b){
    console.log(a>b?a:b);
};
compare(a,b);


//Câu 2
let userInput = prompt("nhap so nguyen:");
userInput = parseInt(userInput);
console.log(userInput);
let mang=[];
for(let i=0; i<=userInput; i++){
    mang[i]=i;
}
function fizzbuzz(mang){
    for(let j=0; j<=userInput; j++){
        if(mang[j]%3==0 && mang[j]%5==0) mang[j]='Fizz Buzz';
        else if(mang[j]%5==0) mang[j]='Buzz';
        else if(mang[j]%3==0) mang[j]='Fizz ';
        else mang[j]=j;
    }
    console.log(mang);
};
fizzbuzz(mang);

//Câu 3: Tạo Object thông tin cá nhân, viết hàm nhận tham số là Object, in ra value của những key có kiểu String của Object đó 

let hchang={
    name: "Nguyen Thi Hong Trang",
    age: 18,
    address: "White house",
    state: "single",
    younger_brother: 2,
}

function hchangne(hchang){
    for(let key in hchang){
        if(typeof hchang[key] == 'string'){
            console.log(`${key}: ${hchang[key]}`);
        }
    }
};

hchangne(hchang);

//Câu 4: Hàm kiểm tra số nguyên tố
//(Keyword: conditions, loop, prime number)

let n= prompt ("Nhap so n");
function is_prime(n){
    if(n<=1) {
        console.log(`so ${n} khong phai la so nguyen to`);
        return;
    }
    for(let i = 2; i<= Math.sqrt(i); i++){
        if(n%i == 0) console.log(`so ${n} khong phai la so nguyen to`);
        return;
    } 
    console.log(`so ${n} la so nguyen to`);
}
is_prime(n);

//Câu 5: Lấy ra đuôi 1 file (VD: abc.html -> html, xyz.jar -> jar).
//(Keyword: string and string methods, conditions)
let file_name = prompt ("Nhap ten file");
function cau5(file_name){
    let index=file_name.indexOf('.');
    if (index === -1) {
        console.log('Tên tệp không chứa dấu chấm.');
        return;
    }
    let kq= file_name.substring(index+1);
    console.log(kq);
}
cau5(file_name);


//Câu 6: Viết hàm viết tắt câu (VD: Hello anh em -> HAE).
//(Keyword: string and string methods (map, lower/upper case,...), loop (if you want to solve without js method - aka C++ solution)

let hehe = prompt("nhập câu bất kỳ");
function isLowerCase(char) {
    return char === char.toLowerCase();
}
function cau6(hehe){
    let arr=hehe.split(" ");
    let result=arr.map(item => item[0]).join('').toUpperCase();
    console.log(result);
};
cau6(hehe);


//Câu 7: Viết hàm đảo ngược hoa, thường của chuỗi (AbccCCCd -> aBCCcccD)
function cau7(hehe){
    let result="";
    for(let char of hehe){
        if(isLowerCase(char)) result+= char.toUpperCase();
        else result+=char.toLowerCase();
    }
    console.log(result);
}
cau7(hehe);

//Câu 8
const myfen= ["mỹ" , "hamy" , "lyly", "kiki", "hehe" , "chunchun", 12345, 678910];
function ailaban(myfen){
    let fenriu=[];
    for(let word of myfen){
        if(typeof(word)==='string') fenriu.push(word);
    }
    console.log(fenriu.join(', '));
}
ailaban(myfen);

// Câu 9
let test1= {
    product: "kem",
    quantity: 101,
    price: 5,
};
let test2= {
    product: "keo",
    quantity: 10,
    price: 5,
};
let test3= {
    product: "banh",
    quantity: 1,
    price: 5,
};
const getPrice = (test) => test.quantity*test.price;
const price1= getPrice(test1);
const price2= getPrice(test2);
const price3= getPrice(test3);
function getTotalPrice (...product){
    return product.reduce((total,num)=> total + num, 0)
};
console.log(getTotalPrice(price1,price2,price3));

//Câu 10
let test ="Hchang hay ki ki";
function smallWords (string, number){
    let words = string.split(" ");
    return words.slice(0,number).join(" ");
}

console.log(smallWords(test,2));

//Câu 11
const students = [
    {hoTen: "Le Van A" , gioiTinh: "Nam"},
    {hoTen: "Le Van B" , gioiTinh: "Nam"},
    {hoTen: "Le Van C" , gioiTinh: "Nữ"},
    {hoTen: "Le Van D" , gioiTinh: "Nam"},
]

function cau11(students){
    let males = students.filter(students=> students.gioiTinh === "Nam");
    let females = students.filter(students => students.gioiTinh==="Nữ");
    return {males, females};
}

const{males, females} = cau11(students);
console.log("Nam:", males.map(students => students.hoTen).join(", "));
console.log("Nữ:", females.map(students => students.hoTen).join(", "));
