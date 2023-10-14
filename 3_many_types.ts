

type people = {
    readonly name:Name,
    age?:number
}

const peoplean = (name:string) : people => ({name})

const c = peoplean("sss")
c.age
