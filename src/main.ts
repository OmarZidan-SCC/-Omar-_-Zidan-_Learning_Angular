import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { BlogListComponent } from './app/blog-list/blog-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/blog-posts', pathMatch: 'full' },
  { path: 'blog-posts', component: BlogListComponent },
  {
    path: 'modify-list-item',
    loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)
  },
  {
    path: 'modify-list-item/:id',
    loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 200 }
    ))
  ]
}).catch((err) => console.error(err));
