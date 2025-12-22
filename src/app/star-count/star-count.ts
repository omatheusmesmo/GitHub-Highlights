import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-star-count',
  imports: [],
  templateUrl: './star-count.html',
  styleUrl: './star-count.scss',
})
export class StarCount {

  repos = input<any[]>([]);

  totalStars = computed(() =>
    this.repos().reduce((acc, repo) => acc + repo.stargazers_count, 0)
  );

}
