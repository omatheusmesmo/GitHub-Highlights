import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Github } from '../github';
import { catchError, of } from 'rxjs';
import { StarCount } from '../star-count/star-count';
import { LanguageHighlights } from '../language-highlights/language-highlights';

@Component({
  selector: 'app-dashboard',
  imports: [ StarCount, LanguageHighlights],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit{

  username = signal<string>('');
  userData: any = {};

  constructor(
    private readonly route: ActivatedRoute,
    private readonly githubService: Github
  ) {}

  ngOnInit(): void {
    const nameFromUrl = this.route.snapshot.paramMap.get('username') || '';
    this.username.set(nameFromUrl);

    console.log('Dashboard User: ', this.username);

    if (this.username()){
      this.githubService.getUser(this.username())
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

}
