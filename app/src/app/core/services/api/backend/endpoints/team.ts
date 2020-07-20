import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseApiClient } from '../../client.base';
import { TeamAdapter } from '../adapters/team.adapter';
import { Team } from 'src/models/team.model';

export class BackendApiTeamEndpoint extends BaseApiClient {
  endpointUrl = '/team';

  private teamAdapter = new TeamAdapter();

  constructor(protected baseUrl: string, protected http: HttpClient) {
    super(baseUrl, http);
  }

  getTeam(teamId: string): Observable<Team> {
    return this.get(
      `${this.endpointUrl}/${teamId}/`,
      {},
    ).pipe(map((data: any) => this.teamAdapter.get(data.data)));
  }
}
