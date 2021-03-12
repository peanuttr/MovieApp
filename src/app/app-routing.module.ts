import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./page/movies/movies.module').then(m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./page/movies-details/movies-details.module').then(m => m.MoviesDetailsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./page/tabs/tabs.module').then(m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
