
//ex_1
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

