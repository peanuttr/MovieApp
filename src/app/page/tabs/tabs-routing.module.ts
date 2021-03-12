import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('../../page/movies/movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: 'movies-details',
        loadChildren: () => import('../../page/movies-details/movies-details.module').then(m => m.MoviesDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
