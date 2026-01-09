import { Component, HostBinding, input, computed } from '@angular/core';
import { LANGUAGE_COLORS } from '../constants';

@Component({
  selector: 'app-language-highlights',
  templateUrl: './language-highlights.html',
  styleUrl: './language-highlights.scss',
})
export class LanguageHighlights {

  repos = input<any[]>([]);

  languageStats = computed(() => {
    const reposList = this.repos();
    if (reposList.length === 0) return { name: 'N/A', count: 0 };

    const languageList = reposList
      .map((repo: any) => repo.language)
      .filter((lang: string | null) => lang !== null);

    if (languageList.length === 0) return { name: 'None', count: 0 };

    const counts: { [key: string]: number } = {};
    languageList.forEach((lang: string) => {
      counts[lang] = (counts[lang] || 0) + 1;
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    return {
      name: sorted[0][0],
      count: sorted[0][1]
    };
  });

  mostUsedLanguage = computed(() => this.languageStats().name);
  repoCount = computed(() => this.languageStats().count);

  get currentColor(): string {
    return LANGUAGE_COLORS[this.mostUsedLanguage()] || '#666';
  }

  @HostBinding('style.borderLeftColor')
  get borderLeftColor(): string {
    return this.currentColor;
  }
}
