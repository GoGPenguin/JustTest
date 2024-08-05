console.log("PROBLEM 1");
function compare(a , b) 
{
    return a>b ? a : b;
};

console.log(compare(2,3));

console.log("PROBLEM 2");
function FizzBuzz(n)
{
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
};

let n=20;
FizzBuzz(n);

/* Interpolation
Template String provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.
*/
// console.log("PROBLEM 3");
// function getOBJkeys(obj)
// {
//     for ([key, value] of Object.entries(obj)) 
//     {
//         if (typeof(`${key}`)== "string" )
//             console.log(`${key}: ${value}`);
//     }
// };

function getOBJkeys(obj)
{
  return Object.keys(obj).filter(key => typeof key === 'string');
}

let person = {
    name : "Truong",
    height : 170,
    description : "nice"
};

console.log(getOBJkeys(person));

console.log("PROBLEM 4");
function isPrime(num, check = 2) {
  // Base cases
  if (num <= 1) return false;
  if (check > Math.sqrt(num)) return true;
  if (num % check === 0) return false;
  return isPrime(num, check + 1);
};

console.log(isPrime(5));

console.log("PROBLEM 5");
function getType(string)
{
    return string.split('.')[1];
};

let file= "abc.html";

console.log(getType(file));

console.log("PROBLEM 6");
function shorten(string)
{
    return string.trim().split(' ').map(word => word.charAt(0)).join('').toUpperCase() ;
};
/*
trim() trả về string không có dấu cách ở 2 đầu, 
split(' ') trả về array gồm string là các "word" được gọi tên trong map,
map ánh xạ array sau khi split và trả về array chứa các kí tự đầu tiên của các word,
join('') trả về string sau khi ghép các word trong array và không chen gì vào giữa,
toUpperCase() để in hoa string
*/
let sentence = "Hello anh em";

console.log(shorten(sentence));

console.log("PROBLEM 7");

function reverse(string)
{
    return string.split('').map(word =>word.charCodeAt(0)>=97? word.toUpperCase() : word.toLowerCase()).join('');
};

let words = "AbccCCCd";

console.log(reverse(words));

console.log("PROBLEM 8");

function getNames(myFriends) 
{
  return myFriends.filter(element => typeof element === 'string');
}

let myFriends = [1,2, "Nam", "Hùng" ,3 ,4, "Hòa" , 6];

console.log(getNames(myFriends));

console.log("PROBLEM 9");

let list = [
  {product: "Milk", quantity: 2, price: 7000},
  {product: "Egg", quantity: 3, price: 3000},
  {product: "Sausage", quantity: 5, price: 5000}
];

function getListTotalPrice(list) 
{
  return list.reduce((total, item) => total + (item.quantity * item.price), 0);
};

console.log(getListTotalPrice(list));

console.log("PROBLEM 10");

function smallWords(string, num)
{
  return string.split(' ').filter(word => word.length <= num).join(' ');
}

let love = "A Son oi k23 khong yeu a "
console.log(smallWords(love,3));

function getMale(students)
{
  return students.filter(students => students.gioitinh == "Nam").map(student =>student.hoTen);
}

function getFemale(students)
{
  return students.filter(students => students.gioitinh == "Nu").map(student =>student.hoTen);
}

let students = [
  {hoTen: "Truong", gioitinh: "Nam"},
  {hoTen: "Thao", gioitinh: "Nu"},
  {hoTen: "Thang", gioitinh: "Nam"},
  {hoTen: "Trang", gioitinh: "Nu"},
];

console.log(getFemale(students));
console.log(getMale(students));

function getClassTotalScore(Scoreboard,Class) 
{
  return Scoreboard.filter(student => student.Class == Class).map(student =>student.score).reduce((total, score) => total + score, 0);
};

let Scoreboard = [
  { hoTen: "Le Van A", Class: "A", score: 7.5},
  { hoTen: "Do Van A", Class: "B", score: 6.8},
  { hoTen: "Nguyen Thi C", Class: "A", score: 8},
  { hoTen: "Dao Van D", Class: "C", score: 9},
  { hoTen: "Hoang Thi E", Class: "B", score: 8.5},
  { hoTen: "Vu Van F", Class: "B", score: 7.2}
];

console.log("A: " +getClassTotalScore(Scoreboard,"A"));
console.log("B: " +getClassTotalScore(Scoreboard,"B"));
console.log("C: " +getClassTotalScore(Scoreboard,"C"));