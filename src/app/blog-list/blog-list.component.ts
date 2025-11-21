import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { BlogListItemComponent } from '../blog-list-item/blog-list-item.component';
import { NgForOf, NgIf } from '@angular/common';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogListItemComponent, NgForOf, NgIf],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  contentList: BlogPost[] = [];
  error: string | null = null;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe({
      next: (data: BlogPost[]) => {
        this.contentList = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching blog posts';
        console.error("Error fetching blog posts:", err);
      },
      complete: () => console.log("Blog post data fetch complete!")
    });
  }

  handleDelete(id: number): void {
    this.blogService.deletePost(id).subscribe({
      next: () => {

        this.contentList = this.contentList.filter(post => post.id !== id);
      },
      error: err => {
        this.error = 'Error deleting post';
        console.error("Error deleting post:", err);
      }
    });
  }
}
