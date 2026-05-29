import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetailPage } from './detail/detail.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'detail/:id',
    component: DetailPage
  }
];