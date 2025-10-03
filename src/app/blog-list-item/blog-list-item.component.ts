import {Component, Input} from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-blog-list-item',
  imports: [],
  templateUrl: './blog-list-item.component.html',
  styleUrl: './blog-list-item.component.css'
})
export class BlogListItemComponent {
  @Input() post?: BlogPost;
}
