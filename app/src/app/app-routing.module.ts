import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'league-browser',
    pathMatch: 'full',
  },
  {
    path: 'league-browser',
    loadChildren: () => import('./league-browser/league-browser.module').then(m => m.LeagueBrowserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
