import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { BlogPost} from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const blogPosts: BlogPost[] = [
      { id: 1, title: "Post 1", content: "This is content 1", author: "Omar", imageUrl: "https://picsum.photos/id/1/400/250", publishDate: new Date('2024-10-21'), sponsorship: 1500.75 },
      { id: 2, title: "Post 2", content: "This is content 2", author: "Zidan", imageUrl: "https://picsum.photos/id/2/400/250", publishDate: new Date('2024-11-05'), sponsorship: 250.50 },
      { id: 3, title: "Post 3", content: "This is content 3", author: "John", imageUrl: "https://picsum.photos/id/3/400/250", publishDate: new Date('2025-01-15'), sponsorship: 3000.00 },
      { id: 4, title: "Post 4", content: "This is content 4", author: "Doe", imageUrl: "https://picsum.photos/id/4/400/250", publishDate: new Date('2025-02-01'), sponsorship: 125.00 }
    ];


    return { blogPosts };
  }
}
