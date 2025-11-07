import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postsUrl = 'api/blogPosts';


  private blogPosts: BlogPost[] = [
    { id: 1, title: "Post 1", content: "This is content 1", author: "Omar", imageUrl: "https://picsum.photos/id/1/400/250" },
    { id: 2, title: "Post 2", content: "This is content 2", author: "Omar", imageUrl: "https://picsum.photos/id/2/400/250" },
    { id: 3, title: "Post 3", content: "This is content 3", author: "Omar", imageUrl: "https://picsum.photos/id/3/400/250" },
    { id: 4, title: "Post 4", content: "This is content 4", author: "Omar", imageUrl: "https://picsum.photos/id/4/400/250" }
  ];

  constructor(private http: HttpClient) { }


  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.postsUrl)
      .pipe(catchError(this.handleError));
  }


  getPostById(id: number): Observable<BlogPost> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<BlogPost>(url)
      .pipe(catchError(this.handleError));
  }


  addPost(post: BlogPost): Observable<BlogPost> {

    post.id = this.generateNewId();

    this.blogPosts.push(post);
    return this.http.post<BlogPost>(this.postsUrl, post)
      .pipe(catchError(this.handleError));
  }


  updatePost(updatedPost: BlogPost): Observable<any> {
    return this.http.put(this.postsUrl, updatedPost)
      .pipe(catchError(this.handleError));
  }


  deletePost(id: number): Observable<{}> {
    const url = `${this.postsUrl}/${id}`;

    this.blogPosts = this.blogPosts.filter(p => p.id !== id);
    return this.http.delete(url)
      .pipe(catchError(this.handleError));
  }


  generateNewId(): number {
    return this.blogPosts.length > 0 ? Math.max(...this.blogPosts.map(post => post.id)) + 1 : 1;
  }


  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);

    return throwError(() => new Error('A data error occurred, please try again.'));
  }
}
