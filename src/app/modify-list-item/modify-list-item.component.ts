import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog-post';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {

  blogForm: FormGroup;
  postToEdit?: BlogPost;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    protected router: Router,
    private route: ActivatedRoute
  ) {

    this.blogForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      // Ig it would be a good add to give option to add a picture :)
      imageUrl: ['']

    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getPostById(+id).subscribe(post => {
        if (post) {

          this.postToEdit = post;
          this.blogForm.patchValue(post);

        }
      });
    }
  }

  onSubmit(): void {
    if (this.blogForm.invalid) {
      return;
    }

    const formValue: BlogPost = this.blogForm.value;

    this.blogService.getPostById(formValue.id).subscribe(existingPost => {
      if (existingPost) {

        this.blogService.updatePost(formValue);
      } else {

        this.blogService.addPost(formValue);
      }

      this.router.navigate(['/blog-posts']);
    });
  }

}
