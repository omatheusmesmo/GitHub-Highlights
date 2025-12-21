import { Component, input, OnInit, signal } from '@angular/core';
import { Github } from '../github';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-language-highlights',
  imports: [],
  templateUrl: './language-highlights.html',
  styleUrl: './language-highlights.scss',
})
export class LanguageHighlights implements OnInit{

  username = input<string>('');
  dataLoaded = signal(false);
  mostUsedLanguage: string = '';
  repoCount: number = 0;
  readonly languageColors: { [key: string]: string } = {
    'TypeScript': '#3178c6', // Azul TS
    'JavaScript': '#f1e05a', // Amarelo JS
    'Python': '#3572A5',     // Azul Python
    'Java': '#b07219',       // Marrom Java
    'HTML': '#e34c26',       // Laranja HTML
    'CSS': '#563d7c',        // Roxo CSS
    'C#': '#178600',         // Verde C#
  };

  constructor(
    private readonly githubService: Github
  ){}

  ngOnInit(): void {
    this.getLanguages(this.username());
  }

  public getLanguages(username: string): void{
    this.githubService.getUserRepos(username)
      .pipe(
        catchError(error => {
          console.log('Error fetching user repos', error);
          return [];
        })
      )
      .subscribe({
        next: (repos) => {
          const languageList = repos
          .map((repo: any) => repo.language)
          .filter((lang: string | null) => lang !== null);

          if (languageList.length > 0) {
            const counts: { [key: string]: number } = {};

            languageList.forEach((lang: string) => {
              counts[lang] = (counts[lang] || 0) + 1;
            });
            const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

            this.mostUsedLanguage = sorted[0][0];
            this.repoCount = sorted[0][1];
          }

          this.dataLoaded.set(true);
        },
        error: (error) => {
          console.log('Error fetching user repos', error);
        }
      })
  }

  get currentColor(): string {
    return this.languageColors[this.mostUsedLanguage] || '#666';
  }
}
