import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home.module').then(module => module.HomeModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list-page/list.module').then(module => module.ListModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail-page/detail.module').then(module => module.DetailModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-page/about.module').then(module => module.AboutModule)
  },
  {
    path: 'my-superheros',
    loadChildren: () => import('./pages/my-superheros-page/my-superheros.module').then(module => module.MySuperHerosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
