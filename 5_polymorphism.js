"use strict";
// type SuperPrint = {
//     (arr:number[]):void
//     (arr:string[]):void
//     (arr:boolean[]):void
//     (arr: (number | boolean)[]):void
// }   
// 함수가 placeholder의 배열을 박고 placeholder중 하나를 리턴하는 것이다. 
const superprint = (arr) => arr[0];
const aa = superprint([1, 2, 3, 4], "2");
const bb = superprint([true, false, false, true]);
const cc = superprint(["a", "h", "c"]);
const dd = superprint([1, 2, true]);
