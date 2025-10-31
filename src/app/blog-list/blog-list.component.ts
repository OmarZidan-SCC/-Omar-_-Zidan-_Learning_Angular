import {Component, OnInit} from '@angular/core';
import { BlogPost } from '../models/blog-post';
import {BlogListItemComponent} from '../blog-list-item/blog-list-item.component';
import {NgForOf} from '@angular/common';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    BlogListItemComponent, NgForOf
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  contentList: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => {
      this.contentList = posts;
    });
  }

  handleDelete(id: number): void {

    this.blogService.deletePost(id);

    this.contentList = this.contentList.filter(post => post.id !== id);
  }
}
