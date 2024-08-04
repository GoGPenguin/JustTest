//* Cho mảng Friend, hãy lấy ra danh sách tên bạn bè trong mảng này
// Input: const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"]
// Output: ["Nam", "Hùng", "Hòa", "Long"]

let myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
let friendFact = [];

for (let x of myFriends) {
    // Nếu x là kiểu string thì bỏ vào mảng friendFact
    if(typeof(x) == `string`) friendFact.push(x);
}

console.log(friendFact);