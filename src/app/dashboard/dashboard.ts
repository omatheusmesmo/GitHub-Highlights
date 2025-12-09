import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Github } from '../github';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  username: string = '';
  userData: any = {};

  constructor(
    private readonly route: ActivatedRoute,
    private readonly githubService: Github
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';

    console.log('Dashboard User: ', this.username);

    this.githubService.getUser(this.username)
      .pipe(
        catchError(error => {
          console.error('Error fetching user:', error);
          return of ({});
        })
      )
      .subscribe({
        next: (data)=> {
          console.log('User data:', data);
          this.userData = data;
        },
        error: (err) => {
          console.error('Subscription error:', err);
        }
      });
  }

}
