"use strict";
// Words타입이 string만을 속성으로 가지는 객라는 것을 말한다.
class Dict {
    // 내가 속성을 만들고 원하는 대로 초기화하기 
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    update(word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "한국의 김치");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
