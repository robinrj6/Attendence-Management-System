import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Person } from '../person';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SendService {
  private heroesUrl: string = "http://localhost:7000/addNew";

  constructor(private http: HttpClient) { }


  addHero(person: Person): Observable<String> {
    return this.http.post<String>(this.heroesUrl, person, httpOptions).pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error occured: ${err.error.message}`;
    }
    else {
      errorMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMsg);
  }
}


