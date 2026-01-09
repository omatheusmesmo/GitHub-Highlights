import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Github } from '../github';
import { catchError, of } from 'rxjs';
import { StarCount } from '../star-count/star-count';
import { LanguageHighlights } from '../language-highlights/language-highlights';
import { ForkCount } from "../fork-count/fork-count";
import { LANGUAGE_COLORS } from '../constants';
import { RepoCount } from "../repo-count/repo-count";

@Component({
  selector: 'app-dashboard',
  imports: [StarCount, LanguageHighlights, ForkCount, RepoCount],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  username = signal<string>('');
  userData: any = null;
  repos = signal<any[]>([]);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly githubService: Github
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nameFromUrl = params.get('username');
      if (nameFromUrl) {
        this.userData = null;
        this.repos.set([]);
        this.fetchData(nameFromUrl);
      }
    });
  }

  private fetchData(user: string) {
    this.githubService.getUser(user)
      .pipe(catchError(() => of(null)))
      .subscribe((data: any) => {
        if (data && data.login) {
          this.username.set(data.login);
          this.userData = data;

          this.githubService.getUserRepos(data.login).subscribe(repos => {

            const sortedRepos = repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
            this.repos.set(sortedRepos);
          });
        }
      });
  }

  getLanguageColor(lang: string): string {
    if (!lang || !LANGUAGE_COLORS[lang]) {
    return '#666666';
  }
    return LANGUAGE_COLORS[lang];
  }
}
