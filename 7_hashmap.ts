type Words = {
    [key:string] : string
}
// Words타입이 string만을 속성으로 가지는 객라는 것을 말한다.

class Dict {
    private words:Words
    // 내가 속성을 만들고 원하는 대로 초기화하기 
    constructor(){
        this.words ={}
     } 

    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;  
        }
    }

    def(term:string){
        return this.words[term]
    }

    update(word:Word){
        if( this.words[word.term] !== undefined ){
            this.words[word.term] = word.def; 
        }   
    }
}

class Word {
    constructor(
       public readonly term : string,
       public readonly def : string, 
    // readonly를 붙이면 public일지라도 kimchi의 내용을 수정할 수 없다. 
    ){}

}

const kimchi =  new Word("kimchi", "한국의 김치");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");








