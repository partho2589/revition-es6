 //1. const or let using

const friendList = ( 'Pranto', 'Maruf ali', 'Riaj', 'Ruble');
let friendAge = [20, 15, 25, 21, 16, 18, 20];
// friendList.push('rana');
// console.log(friendList)

// 2. templatstring

const computerDis = {
     name: 'chaching', price: 1500, color: 'black'
    // { name: 'RAM', price: 3000, color: 'silver'},
    // { name: 'Hard Disk', price: 7000, color: 'black'},
    // { name: 'proccesor', price:10000, color: 'black'}
}
 let chaching = { price:2500}
const myName = 'Partho malo'
const myself = ` My name is ${myName}. This is my computer . This is my comoputer ram price ${computerDis.name}  `;
const price = `My computer chaching ${chaching.price}`
console.log(myself );
console.log(price)