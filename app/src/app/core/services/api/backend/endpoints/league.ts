import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseApiClient } from '../../client.base';
import { League } from '../../../../../../models/league.model';
import { LeagueAdapter } from '../adapters/league.adapter';
import { TeamAdapter } from '../adapters/team.adapter';
import { Team } from 'src/models/team.model';

export class BackendApiLeagueEndpoint extends BaseApiClient {
  endpointUrl = '/league';

  private leagueAdapter = new LeagueAdapter();
  private teamAdapter = new TeamAdapter();

  constructor(protected baseUrl: string, protected http: HttpClient) {
    super(baseUrl, http);
  }

  getAll(): Observable<League[]> {
    return this.get(
      `${this.endpointUrl}/`,
    ).pipe(map((data: any) => this.leagueAdapter.list(data.data)));
  }

  getLeagueTeams(leagueId: string): Observable<Team[]> {
    return this.get(
      `${this.endpointUrl}/${leagueId}/teams/`,
    ).pipe(map((data: any) => this.teamAdapter.list(data.data)));
  }
}
