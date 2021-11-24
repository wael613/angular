import { Component, OnInit } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articles=new Array<Article>();
  createArticle(newTitle: string,newLink : string){
    let newArticle=new Article(newTitle, newLink);
    this.articles.push(newArticle);
  }
  sortArticles() : Article[]{
    return this.articles.sort((a : Article,b :Article)=>
      b.getScore()-a.getScore()
    );
  }
  constructor() { }
}
