import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Article } from '../article'
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-article-landing',
  templateUrl: './article-landing.component.html',
  styleUrls: ['./article-landing.component.css']
})
export class ArticleLandingComponent implements OnInit {
  
  article:Article;
  sub: any;
  errorMessage:string = '';
  constructor(private articleService: ArticleService,
               private route: ActivatedRoute,
               private router: Router) { }


ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let slug = (params['slug']);
          console.log('getting article with slug: ', slug);
          this.articleService
            .get(slug)
            .subscribe(
            	p => this.article = p,
            	e => this.errorMessage = e);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoArticlesList(){
        let link = ['/articles'];
        this.router.navigate(link);
    }

}
