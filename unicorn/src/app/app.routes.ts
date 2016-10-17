import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import {ArticleLandingComponent } from './article-landing/article-landing.component'

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'articles',
    component: ArticleListComponent,
  },
  {
    path: 'articles/:slug',
    component: ArticleLandingComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
