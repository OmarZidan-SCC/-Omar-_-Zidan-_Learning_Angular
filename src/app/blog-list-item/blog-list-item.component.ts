import {Component, Input, Output, EventEmitter} from '@angular/core';
import { BlogPost } from '../models/blog-post';
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, NgStyle, UpperCasePipe} from "@angular/common";
import { Router} from '@angular/router';
import {BylinePipe} from '../pipes/byline.pipe';
import {SponsorshipColorPipe} from '../pipes/sponsorship-color.pipe';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';
import {ShowDetailsOnHoverDirective} from '../directives/show-details-on-hover.directive';

@Component({
  selector: 'app-blog-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    BylinePipe,
    SponsorshipColorPipe,
    NgStyle,
    HoverHighlightDirective,
    ShowDetailsOnHoverDirective
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
