import { Component } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import {BlogListItemComponent} from '../blog-list-item/blog-list-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-blog-list',
  imports: [
    BlogListItemComponent, NgForOf
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  contentList: BlogPost[] = [
    { id: 1, title: "Post 1", content: "This is content 1", author: "Omar", imageUrl: "https://picsum.photos/id/1/400/250" },
    { id: 2, title: "Post 2", content: "This is content 2", author: "Omar", imageUrl: "https://picsum.photos/id/2/400/250" },
    { id: 3, title: "Post 3", content: "This is content 3", author: "Omar", imageUrl: "https://picsum.photos/id/3/400/250" },
    { id: 4, title: "Post 4", content: "This is content 4", author: "Omar", imageUrl: "https://picsum.photos/id/4/400/250" }
  ]

}
