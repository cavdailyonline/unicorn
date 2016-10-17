import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
	articles: Article[] = [];
  errorMessage:string = '';

  constructor(private _articleService : ArticleService) {}

  ngOnInit() {
  	this._articleService
  		.getAll()
  		.subscribe(
                 /* happy path */ p => this.articles = p,
         /* error path */ e => this.errorMessage = e);
  }

}
