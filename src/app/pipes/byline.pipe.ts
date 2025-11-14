import { Pipe, PipeTransform } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Pipe({
  name: 'byline',
  standalone: true
})
export class BylinePipe implements PipeTransform {

  transform(value: BlogPost): string {
    // Check if values are valid :D
    if (!value || !value.title || !value.author) {
      return '';
    }
    return `"${value.title}" by ${value.author}`;
  }

}
