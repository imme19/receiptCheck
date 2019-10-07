import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'rigister', loadChildren: './rigister/rigister.module#RigisterPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'detail-news', loadChildren: './detail-news/detail-news.module#DetailNewsPageModule' },
  { path: 'receipt-check', loadChildren: './receipt-check/receipt-check.module#ReceiptCheckPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
