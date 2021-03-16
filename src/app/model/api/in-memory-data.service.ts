import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Show} from '../Show';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const shows = [
      {id: 0, title: 'Dummy Title 1', releaseDate: new Date(2021, 3, 16), imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 5},
      {id: 1, title: 'Dummy Title 2', releaseDate: new Date(2021, 3, 16), imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 4},
      {id: 2, title: 'Dummy Title 3', releaseDate: new Date(2021, 3, 16), imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 3},
      {id: 3, title: 'Dummy Title 4', releaseDate: new Date(2021, 3, 16), imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 2},
      {id: 4, title: 'Dummy Title 5', releaseDate: new Date(2021, 3, 16), imdbUrl: 'imdburl', netflixUrl: 'netflixurl', myRating: 1}
    ];
    return {shows};
  }

  genId(shows: Show[]): number {
    return shows.length > 0 ? Math.max(...shows.map(hero => hero.id)) + 1 : 11;
  }
}
