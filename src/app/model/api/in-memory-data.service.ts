import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Show} from '../Show';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  private a: number;
  createDb() {
    const shows = [
      {id: 1, title: 'American Vandal', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 2, title: 'Atypical', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 3, title: 'Hyperdrive', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 4, title: 'The End of the F***ing World', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 5, title: 'Insatiable', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 6, title: 'Sex Education', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 7, title: 'Elite', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 8, title: 'You', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 9, title: 'Never Have I Ever', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 10, title: 'Summertime', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 11, title: 'White Lines', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 12, title: '13 Reasons Why', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 13, title: 'Space Force', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 14, title: 'Dynasty', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 15, title: 'Baby', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 16, title: 'Blood & Water', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 17, title: 'Emily in Paris', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 18, title: 'Teenage Bounty Hunters', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 19, title: 'Control Z', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 20, title: 'Love & Anarchy', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 21, title: 'The Queen\'s Gambit', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 22, title: 'Dead to Me', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 23, title: 'DASH & LILY', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 24, title: 'The Mess You Leave Behind', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 25, title: 'Good Girls', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 26, title: 'Lupin', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 27, title: 'The Minions of Midas', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 28, title: 'Firefly Lane', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 29, title: 'Behind Her Eyes', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 30, title: 'When They See Us', releaseYear: 2021, imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
    ];
    return {shows};
  }

  genId(shows: Show[]): number {
    return shows.length > 0 ? Math.max(...shows.map(hero => hero.id)) + 1 : 11;
  }
}
