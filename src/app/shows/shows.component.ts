import {Component, OnInit} from '@angular/core';
import {ShowService} from '../show.service';
import {Show} from '../Show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows: Show[] = [];

  constructor(private showService: ShowService) {
  }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void{
    this.showService.getShows().subscribe(shows => this.shows = shows);
  }
}
