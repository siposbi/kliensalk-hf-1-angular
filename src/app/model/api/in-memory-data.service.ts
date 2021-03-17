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
      {id: 1, title: 'American Vandal', releaseYear: 2017, imdbUrl: 'https://www.imdb.com/title//tt6877772', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 2, title: 'Atypical', releaseYear: 2017, imdbUrl: 'https://www.imdb.com/title//tt6315640', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 3, title: 'Hyperdrive', releaseYear: 2019, imdbUrl: 'https://www.imdb.com/title//tt8911552', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 4, title: 'The End of the F***ing World', releaseYear: 2017, imdbUrl: 'https://www.imdb.com/title//tt6257970', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 5, title: 'Insatiable', releaseYear: 2018, imdbUrl: 'https://www.imdb.com/title//tt6487482', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 6, title: 'Sex Education', releaseYear: 2019, imdbUrl: 'https://www.imdb.com/title//tt7767422', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 7, title: 'Elite', releaseYear: 2018, imdbUrl: 'https://www.imdb.com/title//tt7134908', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 8, title: 'You', releaseYear: 2018, imdbUrl: 'https://www.imdb.com/title//tt7335184', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 9, title: 'Never Have I Ever', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt10062292', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 10, title: 'Summertime', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt11269886', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 11, title: 'White Lines', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt9073958', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 12, title: '13 Reasons Why', releaseYear: 2017, imdbUrl: 'https://www.imdb.com/title//tt1837492', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 13, title: 'Space Force', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt9612516', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 14, title: 'Dynasty', releaseYear: 2017, imdbUrl: 'https://www.imdb.com/title//tt6128300', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 15, title: 'Baby', releaseYear: 2018, imdbUrl: 'https://www.imdb.com/title//tt7645192', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 16, title: 'Blood & Water', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt9839146', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 17, title: 'Emily in Paris', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt8962124', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 18, title: 'Teenage Bounty Hunters', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt10584608', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 19, title: 'Control Z', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt11937662', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 20, title: 'Love & Anarchy', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt10888876', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 21, title: 'The Queen\'s Gambit', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt10048342', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 22, title: 'Dead to Me', releaseYear: 2019, imdbUrl: 'https://www.imdb.com/title//tt8064302', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 23, title: 'DASH & LILY', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt1758589', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 24, title: 'The Mess You Leave Behind', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt9731242', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 25, title: 'Good Girls', releaseYear: 2018, imdbUrl: 'https://www.imdb.com/title//tt6474378', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 26, title: 'Lupin', releaseYear: 2021, imdbUrl: 'https://www.imdb.com/title//tt2531336', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 27, title: 'The Minions of Midas', releaseYear: 2020, imdbUrl: 'https://www.imdb.com/title//tt10147520', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 28, title: 'Firefly Lane', releaseYear: 2021, imdbUrl: 'https://www.imdb.com/title//tt9012876', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 29, title: 'Behind Her Eyes', releaseYear: 2021, imdbUrl: 'https://www.imdb.com/title//tt9698442', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
      {id: 30, title: 'When They See Us', releaseYear: 2019, imdbUrl: 'https://www.imdb.com/title//tt7137906', netflixUrl: 'netflixurl', myRating: Math.floor(Math.random() * 5) + 1},
    ];
    return {shows};
  }

  genId(shows: Show[]): number {
    return shows.length > 0 ? Math.max(...shows.map(hero => hero.id)) + 1 : 11;
  }
}
