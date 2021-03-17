import {Component, OnInit} from '@angular/core';
import {ShowService} from '../model/api/show.service';
import {Show} from '../model/Show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows: Show[];
  showsUnPaginated: Show[] = [];
  page = 1;
  pageSize = 10;
  collectionSize;
  listView = true;

  constructor(private showService: ShowService) {
  }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void {
    this.showService.getShows().subscribe(shows => {
      this.showsUnPaginated = shows;
      this.collectionSize = shows.length;
      this.refreshShows();
    });
  }

  refreshShows(): void {
    this.shows = this.showsUnPaginated
      .map((show, i) => ({id: i + 1, ...show}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  changeView(): void {
    this.listView = !this.listView;
  }
}
