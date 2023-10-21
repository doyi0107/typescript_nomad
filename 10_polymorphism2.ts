interface SStorage<T> {
        [Key:string]: T
}

class LocalStorage<T> {
    private storage : SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }

    //get을 쓰면 string을 보내주고 T를 받는다.
    get(key:string):T {
        return this.storage[key]
    }
    clear(){return this.storage = {} }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("doyi");
stringsStorage.set("doyi", "sss");

const boolreansStorage = new LocalStorage<boolean>();

boolreansStorage.get("s")
boolreansStorage.set("s", true)