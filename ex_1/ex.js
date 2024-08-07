
//ex_1
// ham check max
 function maxNUM(a,b){
    return a>b ? a:b
 }

 let a,b
 
 
// ham nhap tham so
let input1=prompt("nhap so thu nhat")
let input2=prompt("nhap so thu hai")

// thay doi tu choi thanh so
 a=parseFloat(input1)
 b=parseFloat(input2)


 console.log(maxNUM(a,b))
//end_ex_1

//ex_2
//ham check
let n

   var fizzBuzz = function(n) {
      let a=[]
       for(let i=1;i<=n;i++){
              if(i%3==0 && i%5==0) a[i-1]="FizzBuzz"
              else if(i%3==0) a[i-1]="Fizz"
              else if(i%5==0) a[i-1]="Buzz"
              else a[i-1]=i.toString()
          }
      return a
  };
  
  console.log(fizzBuzz(b))
//end ex_2

//ex_3
let infor = {
   name:" Lamna",
   age: 19,
   address: "Hatinh",
   email: "nalengoclam@gmail.com"
}

// for in use for object( or array/string)
// for of use for  array/string dont for object
for(let key in infor){
   if(typeof(infor[key])==='string')
      console.log(key,infor[key])
}
//end ex_3

//ex_4

let c = new Array(1e7).fill(true);

function san() {
   c[0] = c[1] = false; 

   for (let i = 2; i <= Math.sqrt(1e7); i++) {
      if (c[i]) {
         for (let j = i * i; j < 1e7; j += i) {
            c[j] = false;
         }
      }
   }
}

san();


if (c[b]) {
   console.log("It is prime");
} else {
   console.log("It is not prime");
}

//end ex_4

//ex_5: tách đuôi file

function getOut(nameFile){
   let arr=nameFile.split(".");
   return arr.pop();
}

console.log(getOut("file.ext"));
//end ex_5

// //ex_6:
function acr(sentence){
   let arr=sentence.split(" ");
   let acron="";
   for(let key of arr){
          acron+=key[0];
   }
  //note goi ham()
}

console.log(acr("hello my name is NA"))
//end ex_6

//ex_6:map
function acr(sentence){
   let arr=sentence.split(" ");
    let acron=arr.map(item =>item[0]).join("");
   
   return acron.toUpperCase();
}

console.log(acr("hello my name is NA"))

//ex_7
function toChange(string) {
   //arr.reduce(function(total,currentVal,currentIndex,array)){}.initVal)
   return string.split("").reduce((acc, char) => {
      return acc + (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
   }, "");
}

let String = "AbcfEg";
let result = toChange(String);
console.log(result); 
//end ex_7

//ex_8
const myFriend = [1,2,"Nam","Hung",3,4,"Hoa",6,"Long"];
let nameFriend=[];
for(let key of myFriend){
   if(typeof(key)==="string")
      nameFriend.push(key);
}
console.log(nameFriend);
//end ex_8

//ex_9
function getTotalPrice1(Arr){
   let totalPrice=0;
   for(let key of Arr ){
         totalPrice+=key.price;
   }
   return totalPrice;
}

const test1_2=getTotalPrice1([
   { product: "sua1", quantity: 1, price:700},
   { product: "sua2", quantity: 1, price:500},
   { product: "sua3", quantity: 1, price:200},
   { product: "sua4", quantity: 1, price:300},
   { product: "sua5", quantity: 1, price:100},
]);

console.log(test1_2);

//end ex_9

//ex_9 by reduce
function getTotalPrice(Arr){
 return Arr.reduce((total,key)=>
   { return total+=key.price
   },0);
}

const test2=getTotalPrice([
   { product: "sua1", quantity: 1, price:700},
   { product: "sua2", quantity: 1, price:500},
   { product: "sua3", quantity: 1, price:200},
   { product: "sua4", quantity: 1, price:300},
   { product: "sua5", quantity: 1, price:100},
]);
console.log(test2);
// end ex_9

//ex_10
     function smallWords(string,num){
      return string.split(" ").reduce((newString,word)=>{
        if( word.length<=num)
         return newString+" "+word; 
        return newString;
      },"" );
     
     };
     console.log(smallWords("I love Foood Code Too Playing Much",4));
//end  ex_10

//ex_11
const students=[
   {hoten:"Le A",gioitinh: "Nam"},
   {hoten:"Le B",gioitinh: "Nam"},
   {hoten:"Le c",gioitinh: "Nam"},
   {hoten:"Le D",gioitinh: "Nam"},
   {hoten:"Le E",gioitinh: "Nu"},
   {hoten:"Le F",gioitinh: "Nu"},
   {hoten:"Le I",gioitinh: "Nu"},
   {hoten:"Le H",gioitinh: "Nu"} , 
]

let sex={
   "nam":[],
   "nu":[]
}
for (let key of students){
   if (key.gioitinh=="Nam")
      sex.nam.push(key.hoten);
   else sex.nu.push(key.hoten);
}
console.log(sex);
//end ex_11

//ex_12
const stuDents=[
   {hoTen: "Le van a", lop: "A", diem:7.5},
   {hoTen: "Le van b", lop: "A", diem:7.5},
   {hoTen: "Le van c", lop: "B", diem:8.5},
   {hoTen: "Le van d", lop: "C", diem:5.5},
   {hoTen: "Le van e", lop: "C", diem:6.5},
   {hoTen: "Le van f", lop: "B", diem:1.5},
   {hoTen: "Le van g", lop: "A", diem:4.5},
   {hoTen: "Le van h", lop: "B", diem:9.5},
]

let trungBinh={
   A: 0 , B: 0 , C: 0
}

for(let key of stuDents){
   if(key.lop=="A")trungBinh.A+=key.diem;
   if(key.lop=="B")trungBinh.B+=key.diem;
   if(key.lop=="C")trungBinh.C+=key.diem;
}
console.log(trungBinh);
//end ex_12
