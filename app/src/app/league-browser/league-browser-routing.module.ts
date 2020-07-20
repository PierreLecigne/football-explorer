import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueBrowserComponent } from './pages/league-browser/league-browser.component';
import { LeaguesResolver } from './resolvers/leagues.resolver';
import { TeamResolver } from './resolvers/team.resolver';
import { PlayersListComponent } from './pages/players-list/players-list.component';

const routes: Routes = [
  {
    path: '',
    component: LeagueBrowserComponent,
    resolve: {
      leagues: LeaguesResolver
    },
  },
  {
    path: 'team/:teamId',
    component: PlayersListComponent,
    resolve: {
      team: TeamResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueBrowserRoutingModule { }
