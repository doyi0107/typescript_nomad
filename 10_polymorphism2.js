"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    //get을 쓰면 string을 보내주고 T를 받는다.
    get(key) {
        return this.storage[key];
    }
    clear() { return this.storage = {}; }
}
const stringsStorage = new LocalStorage();
stringsStorage.get("doyi");
stringsStorage.set("doyi", "sss");
const boolreansStorage = new LocalStorage();
boolreansStorage.get("s");
boolreansStorage.set("s", true);
