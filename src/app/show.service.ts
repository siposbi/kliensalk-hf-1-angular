import {Injectable} from '@angular/core';
import {SHOWS} from './mock-shows';
import {Show} from './Show';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() {
  }

  getShows(): Observable<Show[]> {
    return of(SHOWS);
  }
}
