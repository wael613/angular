import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-vote-article',
  templateUrl: './vote-article.component.html',
  styleUrls: ['./vote-article.component.css']
})
export class VoteArticleComponent implements OnInit {

@Input() art:any;
upVote(){
this.art.incrementScore();
}
downVote(){
this.art.decrementScore();
}
  ngOnInit(): void {

  }

}
