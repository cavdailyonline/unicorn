import { Component } from '@angular/core';
import { ArticleService } from './article.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent {
  title = 'Unicorn';
}
