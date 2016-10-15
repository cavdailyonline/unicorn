import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

	articles: Article[] = [
		{
			created : 4,
			edited : 4,
			headline : 'Luke Skywalker',
			abstract : 'test',
			authors : [],
			copy : 'copy',
			slug : 'slug',
			status : 'true',
			tags : [],
			images : []
		},
		{
			created : 4,
			edited : 4,
			headline : 'Han Solo',
			abstract : 'test',
			authors : [],
			copy : 'copy',
			slug : 'slug1',
			status : 'true',
			tags : [],
			images : []
		},
		{
			created : 4,
			edited : 4,
			headline : 'Darth Vader',
			abstract : 'test',
			authors : [],
			copy : 'copy',
			slug : 'slug2',
			status : 'true',
			tags : [],
			images : []
		},

	];

  constructor() { }

  ngOnInit() {
  }

}
