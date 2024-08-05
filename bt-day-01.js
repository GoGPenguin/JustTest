//bai 1
let maxNumber=(a,b)=>{
    return a>b?a:b;
}
//console.log(maxNumber(5,6));
//output: 6
// ternary operator

//bai 2

var fizzBuzzi =(n)=> 
    Array.from({length:n}, (_,i) => (i+1)%15===0 ? "FizzBuzz" : (i+1) % 3 === 0 ? "Fizz" : (i+1)%5===0 ? "Buzz" : i.toString());
//First, create a new array with n elements. Then use callback function with index 'i'.
// can use arrow function or map method.
//console.log(fizzBuzzi(15));

//bai 4

var isPrimeNumber = (n) => {
    if(n<2){
        return false;
    }
    else{
        for(let i=2;i*i<=n;i++){
            if(n%i===0){
                return false;
            }
        }
        return true;
    }
}

//bai 3
let myInfor={
    FullName: "Doan Hoang Thien Phu",
    LastName: "Doan",
    FistName: "Phu",
    Age: 18,
    Address: "Hue"
}
let getInforHaveStringType = (obj)=>{
    Object.keys(obj).forEach(key=> {if((typeof obj[key])==="string") console.log(`${key} : ${obj[key]} `)}  );
}
getInforHaveStringType(myInfor);
console.log("--------------------------");
//bai 5
const nameFile="tphusiusiu.com";
let getFileFormat=(nameFile)=> nameFile.split(".")[1];
console.log(getFileFormat(nameFile));
console.log("---------------");

//bai 6
const inputEx6="Hello Anh Em";
let rewriteInput=(inputEx6)=>inputEx6.split(/\s+/).map(ele=>ele[0]).join("");
console.log(rewriteInput(inputEx6));
console.log("-------------------");

//bai 7
const inputEx7="AbccCCCd";
const reverseCaseLetter=(input)=>input.split("").map(ele=> (ele === ele.toUpperCase() && ele !== ele.toLowerCase()) ? ele=ele.toUpperCase() : ele=ele.toLowerCase()).join("");
console.log(reverseCaseLetter(inputEx7));
console.log("-----------------------------");
//bai 8
const myFriends=["Phu", "Thuy", "siusiu", 18, 19];
const getNameFromArray=(array)=>array.filter(ele=> typeof ele === "string");
console.log(getNameFromArray(myFriends));
console.log("---------------");
//bai 9
const items=[
    {product: "Thuy", price: 1000090, quantity: 5000},
    {product: "siusiu", price: 50000, quantity: 9000}
]
const getTotalPrice=(items)=>{
    return items.reduce((accumulator, item)=> accumulator+ item.price*item.quantity ,0);
}
console.log(getTotalPrice(items));
console.log("-----------------");

//bai 10
const sequence="I love youuuuuuuu hehehehehe";
const smallWord=(string,number)=>{
    return string.split(/\s+/).filter(word=>word.length<=number).join(" ");
}
console.log(smallWord(sequence,4));
console.log("------------");

