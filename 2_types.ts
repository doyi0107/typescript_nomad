type Name = string;

type Player = {
    name:Name,
    age?:number
}


const doyi : Player = {
    name:"doyi",
    age:23
}

function playerdong( name:string) : Player {
    return{
           name
    } 
}

const a = playerdong("dong")
console.log(a);
a.age


const playerdan = (name:string) : Player => ({name})

const b = playerdan("sss")
b.age
