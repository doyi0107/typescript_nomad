"use strict";
// type SuperPrint = {
//     (arr:number[]):void
//     (arr:string[]):void
//     (arr:boolean[]):void
//     (arr: (number | boolean)[]):void
// }   
// 함수가 placeholder의 배열을 박고 placeholder중 하나를 리턴하는 것이다. 
const superprint = (arr) => arr[0];
const aa = superprint([1, 2, 3, 4], "x");
const bb = superprint([true, false, false, true], 3);
const cc = superprint(["a", "h", "c"], false);
const dd = superprint([1, 2, true], []);
console.log(aa);
function print(a) {
    return a[0];
}
const aaa = print([1, 2, 3, 4]);
const bbb = print([true, false, false, true]);
const ccc = print(["a", "h", "c"]);
const ddd = print([1, 2, true]);
console.log(aa);
const june = {
    name: "june",
    extraInfo: {
        favFood: "kimchi"
    }
};
const lyhn = {
    name: "lyhn",
    extraInfo: null
};
let V = [1, 2, 3, 4];
