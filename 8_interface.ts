interface Woman  {
    nickname:string,
    healthBar:number
}

const mina : Woman = {
    nickname:"mina",
    healthBar:10
}



type Team = "read" | "blue" | "yellow" 
type Health = 10 | 2 | 5

interface vehicle {
    nickname:string,
    team:Team
    health:Health
}

const car : vehicle  = {
    nickname: "car",
    team: "yellow",
    health: 5
}



// interface

interface group {
    name:string
}

interface group {
    lastName:string
}

interface group {
    health: number
}

const hyen : group = {
    name : "hyen",
    lastName : "a",
    health : 5
}