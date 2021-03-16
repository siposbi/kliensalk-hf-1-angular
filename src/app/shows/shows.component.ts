import {Component, OnInit} from '@angular/core';
import {SHOWS} from '../mock-shows';
import {Show} from '../Show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows = SHOWS;
  selectedShow?: Show;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(show: Show): void {
    this.selectedShow = show;
  }
}
