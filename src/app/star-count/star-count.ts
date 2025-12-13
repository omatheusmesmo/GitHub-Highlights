import { Component, input, OnInit } from '@angular/core';
import { Github } from '../github';
import { catchError } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-star-count',
  imports: [],
  templateUrl: './star-count.html',
  styleUrl: './star-count.scss',
})
export class StarCount implements OnInit{

  username = input<string>('');
  totalStars: number = 0;
  dataLoaded: boolean = false;

  constructor(
    private readonly githubService: Github
  ){}
  ngOnInit(): void {
    this.githubService.getUserRepos(this.username());
  }

  public getUserRepos(username: string): void{
    this.githubService.getUserRepos(username)
      .pipe(
        catchError(error => {
                  console.error('Error fetching user repos:', error);
                  return [];
                })
      )
      .subscribe({
        next: (data) =>{

          this.totalStars =data.reduce((acumulator: number, repository: any) => {
            return acumulator + repository.stargazers_count;
          }, 0);

          this.dataLoaded = true;

          console.log('Total Stars: ', this.totalStars);
        },
        error: (error) =>{
          console.error('Subscription erros: ', error);
        }
      })
  }

}
