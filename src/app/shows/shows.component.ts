import { Component, OnInit } from '@angular/core';
import {Show} from '../Show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  show: Show = {
    title: 'You',
    releaseDate: new Date(2018, 9, 9),
    imdbUrl: 'https://www.imdb.com/title/tt7335184',
    netflixUrl: 'https://www.netflix.com/title/80211991',
    myRating: 5
  };

  constructor() { }

  ngOnInit(): void {
  }

}
