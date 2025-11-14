import {Component, Input, Output, EventEmitter} from '@angular/core';
import { BlogPost } from '../models/blog-post';
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import { Router} from '@angular/router';
import {BylinePipe} from '../pipes/byline.pipe';

@Component({
  selector: 'app-blog-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    BylinePipe
  ],
  templateUrl: './blog-list-item.component.html',
  styleUrl: './blog-list-item.component.css'
})
export class BlogListItemComponent {
  @Input() post?: BlogPost;

  @Output() deleteRequest = new EventEmitter<number>();

  constructor(private router: Router) {}

  editPost(): void {
    if (this.post) {

      this.router.navigate(['/modify-list-item', this.post.id]);
    }
  }

  deletePost(): void {
    if (this.post) {

      this.deleteRequest.emit(this.post.id);
    }
  }
}
