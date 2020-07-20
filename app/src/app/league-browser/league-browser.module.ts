import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LeagueBrowserComponent } from './pages/league-browser/league-browser.component';
import { PlayersListComponent } from './pages/players-list/players-list.component';
import { LeagueBrowserRoutingModule } from './league-browser-routing.module';
import { TeamsListComponent } from './components/teams-list/teams-list.component';


@NgModule({
  declarations: [LeagueBrowserComponent, PlayersListComponent, TeamsListComponent],
  imports: [
    CommonModule,
    LeagueBrowserRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class LeagueBrowserModule { }
