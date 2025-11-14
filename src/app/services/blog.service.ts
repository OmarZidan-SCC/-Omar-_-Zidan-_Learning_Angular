import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postsUrl = 'api/blogPosts';

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
    return this.http.post<BlogPost>(this.postsUrl, post)
      .pipe(catchError(this.handleError));
  }

  updatePost(updatedPost: BlogPost): Observable<any> {

    return this.http.put(this.postsUrl, updatedPost)
      .pipe(catchError(this.handleError));
  }


  deletePost(id: number): Observable<{}> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete(url)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('A data error occurred, please try again.'));
  }
}
