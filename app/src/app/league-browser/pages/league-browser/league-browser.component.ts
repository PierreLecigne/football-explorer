import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { League } from 'src/models/league.model';
import { LeagueBrowserService } from '../../services/league-browser.service';

@Component({
  selector: 'app-league-browser',
  templateUrl: './league-browser.component.html',
})
export class LeagueBrowserComponent implements OnInit, OnDestroy {
  leagueSearch = new FormControl();
  filteredOptions: Observable<string[]>;
  leagues: League[];
  selectedLeague: League = null;
  private ngUnsubscribe = new Subject<void>();

  constructor(private route: ActivatedRoute, private leagueBrowserService: LeagueBrowserService) {}

  ngOnInit(): void {
    this.leagues = this.route.snapshot.data.leagues;

    this.filteredOptions = this.leagueSearch.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this.leagueBrowserService.selectedLeague
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(selectedLeague => {
        this.selectedLeague = selectedLeague;
    });
  }

  private _filter(value: string): string[] {
    return this.leagues.map(l => l.name).filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }

  optionSelected(e: MatAutocompleteSelectedEvent): void {
    this.leagueBrowserService.setSelectedLeague(this.leagues.find(league => league.name === e.option.value));
  }

  resetSearch(): void {
    this.leagueSearch.reset('');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
