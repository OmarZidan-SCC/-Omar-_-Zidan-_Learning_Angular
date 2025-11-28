import {Component, Input, Output, EventEmitter} from '@angular/core';
import { BlogPost } from '../models/blog-post';
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, NgStyle, UpperCasePipe} from "@angular/common";
import { Router} from '@angular/router';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from '@angular/material/card';
import {MatIconButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatCardTitle} from '@angular/material/card';
import {MatCardSubtitle} from '@angular/material/card';

@Component({
  selector: 'app-blog-list-item',
  standalone: true,
  imports: [
    NgIf,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    MatCardImage,
    MatIconButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatDivider,
    MatCardActions,
    MatIcon,
    MatTooltip,
    MatCardTitle,
    MatCardSubtitle,
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
