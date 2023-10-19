interface firstUser {
    firstName:string,
    lastName:string
    sayHi(name:string):string
    fullName():string
}

interface Human{
    health:number
}

class firstPlayer implements firstUser,Human{
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}

    fullName() {
        return `${this.fullName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `Hello ${name} My name is ${this.fullName}`
    }
}


function makeUser(user:firstUser):firstUser{
    return {
        firstName:"doyi",
        lastName:"le",
        fullName:() => "xxx",
        sayHi:(name)=> "string"
    }
}

makeUser({
    firstName:"doyi",
    lastName:"le",
    fullName:() => "xxx",
    sayHi:(name)=> "string"
})
