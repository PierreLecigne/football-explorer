import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { League } from 'src/models/league.model';
import { BackendApiClientService } from 'src/app/core/services/api/backend/client.service';
import { Team } from 'src/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueBrowserService {
  private selectedLeagueSubject: BehaviorSubject<League> = new BehaviorSubject<League>(null);
  public selectedLeague: Observable<League> = this.selectedLeagueSubject.asObservable();

  constructor(private backendApiClientService: BackendApiClientService) { }

  setSelectedLeague(league: League): void {
    this.selectedLeagueSubject.next(league);
  }

  getLeagueTeams(leagueId: string): Observable<Team[]> {
    return this.backendApiClientService.league.getLeagueTeams(leagueId);
  }
}
