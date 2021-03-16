import {Component, OnInit} from '@angular/core';
import {SHOWS} from '../mock-shows';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows = SHOWS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
