import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class MarkAttendenceService {
  private heroesUrl: string = "http://localhost:7000/getbyid/";

  constructor(private http: HttpClient) { }

  markAttn(id:number):Observable<Number>{
    console.log(id);
    return this.http.post<Number>(this.heroesUrl+id,id).pipe(catchError(this.handleError));
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
