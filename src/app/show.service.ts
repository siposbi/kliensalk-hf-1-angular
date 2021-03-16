import {Injectable} from '@angular/core';
import {Show} from './Show';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private showsUrl = 'api/shows';

  constructor(
    private http: HttpClient
  ) {
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.showsUrl).pipe(
      tap(_ =>
        catchError(this.handleError<Show[]>('getShows', []))
      )
    );
  }

  getShow(id: number): Observable<Show> {
    const url = `${this.showsUrl}/${id}`;
    return this.http.get<Show>(url).pipe(
      tap(_ =>
        catchError(this.handleError<Show>(`getHero id=${id}`)))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
