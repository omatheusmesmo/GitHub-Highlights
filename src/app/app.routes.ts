import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Search } from './search/search';

export const routes: Routes = [
  { path: '', component: Search  },
  { path: 'dashboard/:username', component: Dashboard}
];
