import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Config, CONFIG } from '../../../config/config';

import { BackendApiLeagueEndpoint } from './endpoints/league';
import { BackendApiTeamEndpoint } from './endpoints/team';

@Injectable({
  providedIn: 'root',
})
export class BackendApiClientService {
  league: BackendApiLeagueEndpoint;
  team: BackendApiTeamEndpoint;

  constructor(@Inject(CONFIG) private config: Config, protected http: HttpClient) {
    this.league = new BackendApiLeagueEndpoint(this.config.api.baseUrl, http);
    this.team = new BackendApiTeamEndpoint(this.config.api.baseUrl, http);
  }
}
