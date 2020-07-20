import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { BackendApiClientService } from '../../core/services/api/backend/client.service';
import { Team } from 'src/models/team.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamResolver implements Resolve<Team> {

  constructor(private backendClient: BackendApiClientService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Team> {
    const teamId = route.paramMap.get('teamId');
    return this.backendClient.team.getTeam(teamId)
      .pipe(catchError(() => {
        this.router.navigate(['/league-browser']);
        return of(null);
      }));
  }
}
