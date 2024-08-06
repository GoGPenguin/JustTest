//* Viết hàm smallWords(string, number), trả về một string mới chỉ gồm những từ <= number

let smallWords = (s, n) => {
    let arr = s.split(" ");
    let ss = "";
    for (let word of arr) 
        if (word.length <= n) ss += word + " ";
    return ss;
}

console.log(smallWords("I Love Foood Code Too Playing Much", 4));
console.log(smallWords("I Love Foood Code Too Playing Much", 3));