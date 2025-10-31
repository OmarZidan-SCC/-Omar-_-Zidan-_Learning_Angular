import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private contentList: BlogPost[] = [
    { id: 1, title: "Post 1", content: "This is content 1", author: "Omar", imageUrl: "https://picsum.photos/id/1/400/250" },
    { id: 2, title: "Post 2", content: "This is content 2", author: "Omar", imageUrl: "https://picsum.photos/id/2/400/250" },
    { id: 3, title: "Post 3", content: "This is content 3", author: "Omar", imageUrl: "https://picsum.photos/id/3/400/250" },
    { id: 4, title: "Post 4", content: "This is content 4", author: "Omar", imageUrl: "https://picsum.photos/id/4/400/250" }
  ];

  constructor() { }

  getPosts(): Observable<BlogPost[]> {
    return of(this.contentList);
  }

  getPostById(id: number): Observable<BlogPost | undefined> {
    return of(this.contentList.find(post => post.id === id));
  }

  addPost(post: BlogPost): Observable<BlogPost> {
    this.contentList.push(post);
    return of(post);
  }

  updatePost(updatedPost: BlogPost): Observable<BlogPost | undefined> {
    const index = this.contentList.findIndex(post => post.id === updatedPost.id);
    if (index > -1) {
      this.contentList[index] = updatedPost;
      return of(updatedPost);
    }
    return of(undefined); // Return undefined if the post wasn't found
  }

  deletePost(id: number): void {
    this.contentList = this.contentList.filter(post => post.id !== id);
  }

  generateNewId(): number {
    return this.contentList.length > 0 ? Math.max(...this.contentList.map(post => post.id)) + 1 : 1;
  }
}
