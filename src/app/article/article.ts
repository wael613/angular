export class Article {
    private title : string;
    private link : string;
    private score : number;
    constructor(t:string,l:string,s?:number){
        this.title=t;
        this.link=l;
        this.score= s || 0;
    }
    getTitle (): string{
        return this.title
    }
    getLink():string{
        return this.link
    }
    getScore():number{
        return this.score;
    }
    setTitle(title : string){
        this.title=title;
    }
    incrementScore(){
        this.score ++;
    }
    decrementScore(){
        if (this.score>0){
            this.score --;
        }
    }
}