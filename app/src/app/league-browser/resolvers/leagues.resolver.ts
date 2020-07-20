import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { League } from '../../../models/league.model';
import { BackendApiClientService } from '../../core/services/api/backend/client.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaguesResolver implements Resolve<League[]> {

  constructor(private backendClient: BackendApiClientService, private router: Router) {}

  resolve(): Observable<League[]> {
    return this.backendClient.league.getAll()
      .pipe(catchError(() => {
        return of([]);
      }));
  }
}
