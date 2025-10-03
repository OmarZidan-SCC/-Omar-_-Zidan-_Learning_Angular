import {Component, Input} from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-blog-list-item',
  standalone: true,
  imports: [],
  templateUrl: './blog-list-item.component.html',
  styleUrl: './blog-list-item.component.css'
})
export class BlogListItemComponent {
  @Input() post?: BlogPost;
}
