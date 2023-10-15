// readonly

type people = {
    readonly name:Name,
    age?:number
}

const peoplean = (name:string) : people => ({name})

const c = peoplean("sss")
c.age
c.name

// tuple
const children: readonly [string , number, boolean] = ["yoon" , 23, true]
children[0] = "hi"


// any
const v : any[] = [1,2,3,4,5]
const e : any = true

v + e 

// unknown
let d:unknown;

let f = d + 1

if(typeof d === 'number'){
    let f = d + 1
}


function hello() {
    console.log(xx);
}

// never
function bye(name:string|number) {
    if(typeof name === "string"){
          
    }else if(typeof name === "number"){

    }else{
        name
    }
}


