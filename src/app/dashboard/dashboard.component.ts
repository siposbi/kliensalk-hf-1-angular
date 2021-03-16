import { Component, OnInit } from '@angular/core';
import {Show} from '../Show';
import {ShowService} from '../show.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  shows: Show[] = [];
  selectedShow?: Show;

  constructor(private showService: ShowService) {
  }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void{
    this.showService.getShows().subscribe(shows => this.shows = shows);
  }
}
