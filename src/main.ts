import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { BlogListComponent } from './app/blog-list/blog-list.component';

import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';

import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './app/services/in-memory-data.service';
import { provideHttpClient} from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: '/blog-posts', pathMatch: 'full' },
  { path: 'blog-posts', component: BlogListComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: 'modify-list-item/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(App, {
  providers: [

    provideHttpClient(),

    provideRouter(routes),

    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { delay: 500 }
    ))
  ]
}).catch((err) => console.error(err));
