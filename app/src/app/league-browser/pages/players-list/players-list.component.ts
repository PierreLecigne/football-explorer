import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';

import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  team: Team;

  constructor(private route: ActivatedRoute) { }

  formatDate(date: Date): string {
    return format(date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.team = this.route.snapshot.data.team;
  }
}
