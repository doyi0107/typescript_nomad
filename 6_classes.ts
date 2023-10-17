abstract class User{
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickname:string
    ){}

    abstract getNickName():void;

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Man extends User{
    getNickName(){
        console.log(this.nickname);
        
    }
}

const sevin =  new Man("lee", "se", "vin")

sevin.getFullName
