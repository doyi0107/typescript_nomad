//오버로딩의 나쁜 예지만 왜인지 잘 모르겠음 
// call signatures 파라미터의 타입 다른 예 

type Add = {
    (a:number, b:number) : number 
    (a:number, b:string) : number
}

const add: Add = (a, b) => {
    if(typeof b === "string") return a 
    return b
}

// 오버로딩의 좋은 예지만 왜인지 잘 모르겠음 

type Config = {
     path:string,
     state:object
}

type Push = {
    (push:string) : void
    (config: Config) :void;
}

const push:Push = (config) => {
    if(typeof config === "string") console.log(config);
    else {
        console.log(config.path, config.state)
        
    }
    
}

// call signatures 파라미터의 개수 다른 예 

type Add_2 = {
    (a:number, b:number) : number
    (a:number, b:number, c:number) : number,
    // c는 옵션에 해당한다. 
} 

const add_2:Add_2 = (a,b,c?:number) => {
    if(c) return a + b + c 
    return a + b
}

console.log(add_2(1,2,3));  // 6
console.log(add_2(1,2));  // 3

