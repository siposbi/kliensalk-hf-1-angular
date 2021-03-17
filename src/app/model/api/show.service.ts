import {Injectable} from '@angular/core';
import {Show} from '../Show';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private showsUrl = 'api/shows';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) {
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.showsUrl).pipe(
      catchError(this.handleError<Show[]>('getShows', []))
    );
  }

  getShow(id: number): Observable<Show> {
    const url = `${this.showsUrl}/${id}`;
    return this.http.get<Show>(url).pipe(
      catchError(this.handleError<Show>(`getShow id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  updateShow(show: Show): Observable<any> {
    return this.http.put(this.showsUrl, show, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateShow'))
    );
  }

  addShow(show: Show): Observable<Show> {
    return this.http.post<Show>(this.showsUrl, show, this.httpOptions).pipe(
      catchError(this.handleError<Show>('addShow'))
    );
  }

  deleteShow(show: Show | number): Observable<Show> {
    const id = typeof show === 'number' ? show : show.id;
    const url = `${this.showsUrl}/${id}`;

    return this.http.delete<Show>(url, this.httpOptions).pipe(
      catchError(this.handleError<Show>('deleteShow'))
    );
  }
}
