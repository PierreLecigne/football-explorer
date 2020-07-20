import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { League } from 'src/models/league.model';
import { LeagueBrowserService } from '../../services/league-browser.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnChanges, OnDestroy {
  @Input() league: League;
  teams: Team[];
  private ngUnsubscribe = new Subject<void>();

  constructor(private leagueBrowserService: LeagueBrowserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.league && changes.league.currentValue) {
      this.fetchTeams();
    }
  }

  fetchTeams(): void {
    this.leagueBrowserService.getLeagueTeams(this.league.id)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(teams => {
      this.teams = teams;
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
