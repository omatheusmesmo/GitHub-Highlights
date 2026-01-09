import { Component, input } from '@angular/core';

@Component({
  selector: 'app-repo-count',
  imports: [],
  templateUrl: './repo-count.html',
  styleUrl: './repo-count.scss'
})
export class RepoCount {
  count = input<number>(0);
}
