import {Component, Input} from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-blog-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './blog-list-item.component.html',
  styleUrl: './blog-list-item.component.css'
})
export class BlogListItemComponent {
  @Input() post?: BlogPost;
}
