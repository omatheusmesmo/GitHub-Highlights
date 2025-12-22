import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {

  private readonly router = inject(Router);

  username: string = '';
  searchEvent = output<string>();

  public onSearch(): void {
    const trimmed = this.username.trim();
    if (!trimmed) return;

    console.log('Search triggered for:', trimmed);

    this.router.navigate(['/dashboard', trimmed]);
  }
}
