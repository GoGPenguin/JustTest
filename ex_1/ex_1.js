
// ham check max
 function maxNUM(a,b){
    return a>b ? a:b
 }

 let a,b
 
 do{
// ham nhap tham so
let input1=prompt("nhap so thu nhat")
let input2=prompt("nhap so thu hai")

// thay doi tu choi thanh so
 a=parseFloat(input1)
 b=parseFloat(input2)
 }
 while(isNaN(a)||isNaN(b))

 console.log(maxNUM(a,b))