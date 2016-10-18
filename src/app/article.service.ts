import { Injectable } from '@angular/core';
import { Article } from './article'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ArticleService {

	private getHeaders(){
	    let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	  }
	private baseUrl: string = "http://localhost:8000/api";
	
	constructor(private http: Http){
	}

	get(slug: string): Observable<Article> {
	    let article$ = this.http
	      .get(`${this.baseUrl}/articles/${slug}/`, {headers: this.getHeaders()})
	      .map(mapArticle)
	      return article$;
  	}

	getAll(): Observable<Article[]>{
    let articles$ = this.http
      .get(`${this.baseUrl}/articles/`, {headers: this.getHeaders()})
      .map(mapArticles);
      return articles$;
  	}

}

//Cleanup Functions 

function mapArticles(response:Response): Article[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().map(toArticle)
}
function mapArticle(response:Response): Article{
   // toArticle looks just like in the previous example
   return toArticle(response.json());
}

function toArticle(r:any): Article{
  let article = <Article>({
    id: r.id,
    created: r.created,
    edited: r.edited,
    headline: r.headline,
    authors: r.authors,
    tags: r.tags,
    images: r.images,
    abstract: r.abstract,
    copy: r.copy,
    slug: r.slug,
    status: r.status
  });
  console.log('Parsed article:', article); 
  return article;
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}