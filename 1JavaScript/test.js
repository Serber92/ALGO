// var Solution = function(nums) {
//     this.preserve = nums;
// };

// Solion.prototype.reset = function() {
//     var resetInner = function() {
//         return this.preserve;
//     }.bind(this);
//     return resetInner();
// };

// Solution.prototype.param = function() {
//     var paramInner = function() {
//         return arguments[0]
//     }.bind(this);
//     return paramInner();
// };

// const a = new Solution([1,2,3]);
// console.log(a.param())

//--------------------------------------------
// hidden prop by Symbol
// const hidden = Symbol('hiddenProp');

// let obj = {
//     name: 'OBJ',
//     [hidden]: 'this is hidden'
// }

// for (let key in obj) {
//     console.log(key, ' - ', obj[key]);
// }

// let symbols = Object.getOwnPropertySymbols(obj);
// console.log('Hidden - ', obj[symbols[0]])
//--------------------------------------------

//--------------------------------------------
// let globalSymbol = Symbol.for([1,2,3]);
// console.log(Symbol.keyFor(globalSymbol));
//--------------------------------------------

//--------------------------------------------
// class Test {
//     constructor(value) {
//         this.value = value;
//     }

//     [Symbol.toPrimitive](hint) {
//         if (hint === 'number') {
//             return parseInt(this.value);
//         }
//         return 0;
//     }
// }

// let one = new Test("1");
// let two = new Test("2");
// console.log(+two + +one);
//--------------------------------------------


//--------------------------------------------
// Generators
// let arr = [1,2,3,4,5];

// const iterate = function*() {
//     yield* arr;
// }

// for (let a of iterate()) {
//     console.log(a);
// }
//--------------------------------------------

//--------------------------------------------
// const getNum = function*() {
//     let start = 0;

//     while(start < 10) {
//         yield start;
//         start++;
//     }
// }

// for (let num of getNum()) {
//     console.log(num);
// }
//--------------------------------------------


