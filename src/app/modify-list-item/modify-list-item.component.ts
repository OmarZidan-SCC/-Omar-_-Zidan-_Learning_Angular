import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog-post';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ReactiveFormsModule, MatTooltip, MatButton, MatInput, MatFormField, MatLabel],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  blogForm: FormGroup;
  error: string | null = null;


  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.blogForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      // If an ID exists in the URL, we set isEditing to true.
      this.isEditing = true;
      this.blogService.getPostById(+idParam).subscribe({
        next: post => {
          if (post) {
            this.blogForm.patchValue(post);
          }
        },
        error: err => {
          this.error = 'Error fetching blog post';
          console.error('Error fetching post:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.blogForm.valid) {
      const post: BlogPost = this.blogForm.value;

      if (this.isEditing) {

        this.blogService.updatePost(post).subscribe(() => this.router.navigate(['/blog-posts']));
      } else {

        this.blogService.addPost(post).subscribe(() => this.router.navigate(['/blog-posts']));
      }
    }
  }

  onDelete(): void {
    const id = this.blogForm.value.id;
    if (id) {
      this.blogService.deletePost(id).subscribe(() => this.router.navigate(['/blog-posts']));
    }
  }

  navigateToBlogList(): void {
    this.router.navigate(['/blog-posts']);
  }
}
