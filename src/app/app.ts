import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet], (It was throwing an error so I had to remove it to fix the issue)
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  studentName:string = 'Omar'
  className:string = 'MAD 307'
}
