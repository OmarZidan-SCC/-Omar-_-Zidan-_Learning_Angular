import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPost} from './models/blog-post';
import {BlogListComponent} from './blog-list/blog-list.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [BlogListComponent, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Personal-Blog');

  // I will fill them later
  blogPostList: BlogPost[] = [
    { id: 1, title: "Post One", content: "Content 1", author: "Author A", published: true },
    { id: 2, title: "Post Two", content: "Content 2", author: "Author B" },
    { id: 3, title: "Post Three", content: "Content 3", author: "Author C", published: false },
    { id: 4, title: "Post Four", content: "Content 4", author: "Author D", published: true },
    { id: 5, title: "Post Five", content: "Content 5", author: "Author E" },
    { id: 6, title: "Post Six", content: "Content 6", author: "Author F", published: true }
  ];

  togglePublished(post: BlogPost): void {
    post.published = !post.published;
  }
}

