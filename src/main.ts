import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { BlogListComponent } from './app/blog-list/blog-list.component';

import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/blog-posts', pathMatch: 'full' },
  { path: 'blog-posts', component: BlogListComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));

