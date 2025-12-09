import { Component } from '@angular/core';
import { Github } from '../github';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {

  constructor(
    private readonly githubService: Github,
    private readonly router: Router
  ) {}

  username: string = '';

  public search(username: string = this.username): void {
    this.githubService.getUser(username)
      .pipe(
        catchError(error => {
          console.error('Error fetching user:', error);
          return [];
        })
      )
      .subscribe({
        next: (data)=> {
          console.log('User data:', data);
          this.router.navigate(['/dashboard', this.username]);
        },
        error: (err) => {
          console.error('Subscription error:', err);
        }
      });
  }

}
