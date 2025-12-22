import { Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-fork-count',
  imports: [],
  templateUrl: './fork-count.html',
  styleUrl: './fork-count.scss',
})
export class ForkCount {
  repos = input<any[]>([]);

  totalForks = computed(() =>
    this.repos().reduce((acc, repo) => acc + (repo.forks_count || 0), 0)
  );
}
