"use strict";
//오버로딩의 나쁜 예지만 왜인지 잘 모르겠음 
// call signatures 파라미터의 타입 다른 예 
const add = (a, b) => {
    if (typeof b === "string")
        return a;
    return b;
};
const push = (config) => {
    if (typeof config === "string")
        console.log(config);
    else {
        console.log(config.path, config.state);
    }
};
const add_2 = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
console.log(add_2(1, 2, 3)); // 6
console.log(add_2(1, 2)); // 3
