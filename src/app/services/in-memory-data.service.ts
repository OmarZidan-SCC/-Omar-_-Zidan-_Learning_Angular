import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { BlogPost} from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const blogPosts: BlogPost[] = [
      {
        id: 1,
        title: "Exploring the Mountains",
        content: "A deep dive into the beauty of the serene mountain ranges.",
        author: "Jane Doe",
        imageUrl: "https://images.unsplash.com/photo-1507097228952-d5eaafd19f70?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: new Date('2024-10-21'),
        sponsorship: 1500.75
      },
      {
        id: 2,
        title: "The Art of Modern Architecture",
        content: "How modern design is shaping our cities and skylines.",
        author: "John Smith",
        imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: new Date('2024-11-05'),
        sponsorship: 250.50
      },
      {
        id: 3,
        title: "A Guide to Minimalist Living",
        content: "Finding joy in simplicity and decluttering your life.",
        author: "Emily White",
        imageUrl: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        publishDate: new Date('2025-01-15'),
        sponsorship: 3000.00
      },
      {
        id: 4,
        title: "The Future of Space Exploration",
        content: "What's next for humanity among the stars?.. Also hopefully the astronaut is not drifting away 💀",
        author: "Chris Green",
        imageUrl: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: new Date('2025-02-01'),
        sponsorship: 125.00
      }
    ];


    return { blogPosts };
  }
}
