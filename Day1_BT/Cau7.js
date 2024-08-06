//* Viết hàm đảo ngược hoa, thường của chuỗi (AbccCCCd -> aBCCcccD)

function getReverse(s) {
    let ss = "";
    for (let i = 0; i < s.length; i++) {
        if(s[i] == s[i].toUpperCase()) // Nếu s[i] là chữ Hoa thì ss += chữ thường, và ngược lại
            ss += s[i].toLowerCase();
        else 
            ss += s[i].toUpperCase();
    }
    return ss;
}

console.log(getReverse('AbccCCCd'));