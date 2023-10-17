// type SuperPrint = {
//     (arr:number[]):void
//     (arr:string[]):void
//     (arr:boolean[]):void
//     (arr: (number | boolean)[]):void
// }   

// const superprint:SuperPrint = (arr) =>{
//     arr.forEach(i => console.log(i)
//     )
// }

// superprint([1,2,3,4])
// superprint([true, false, false, true])
// superprint(["a" , "h" , "c"])
// superprint([ 1,2, true])




// type SuperPrint = {
//     <TypePlaceholder>(arr:TypePlaceholder[]):void
// }   

// const superprint:SuperPrint = (arr) =>{
//     arr.forEach(i => console.log(i)
//     )
// }

// superprint([1,2,3,4])
// superprint([true, false, false, true])
// superprint(["a" , "h" , "c"])
// superprint([ 1,2, true])



type SuperPrint = {
    <T , M>(arr:T[] , b:M):T
}   
// 함수가 placeholder의 배열을 박고 placeholder중 하나를 리턴하는 것이다. 


const superprint:SuperPrint = (arr) => arr[0]

const aa = superprint([1,2,3,4] , "x")
const bb = superprint([true, false, false, true] , 3)
const cc = superprint(["a" , "h" , "c"] , false)
const dd = superprint([ 1,2, true], [])

console.log(aa);


function print<T>(a : T[]) {
    return a[0]
}


const aaa = print([1,2,3,4] )
const bbb = print([true, false, false, true])
const ccc = print(["a" , "h" , "c"])
const ddd = print([ 1,2, true])

console.log(aa);


type Actor<E> = {
    name:string
    extraInfo:E;
}

type juneExtra = {
    favFood:string
}

type juneActor = Actor<juneExtra>

const june: juneActor = {
      name:"june",
      extraInfo:{
        favFood:"kimchi"
      }
}

const lyhn : Actor<null> = {
    name:"lyhn",
    extraInfo:null
}

type A = Array<number>

let V:A = [1,2,3,4]

