import { Component } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  contentList: BlogPost[] = [
    { id: 1, title: "Post 1", content: "This is content 1", author: "Omar" },
    { id: 2, title: "Post 2", content: "This is content 2", author: "Omar" },
    { id: 3, title: "Post 3", content: "This is content 3", author: "Omar" },
    { id: 4, title: "Post 4", content: "This is content 4", author: "Omar" }
  ];

}
