import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class GetallService {
  private heroesUrl: string="http://localhost:7000/getAll";
  constructor(private http:HttpClient) { }

  getAll():Observable<Person[]>{
    return this.http.get<Person[]>(this.heroesUrl).pipe(
      tap(data=>console.log("All",JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(err:HttpErrorResponse){
    let errorMsg='';
    if(err.error instanceof ErrorEvent){
      errorMsg=`An error occured: ${err.error.message}`;
    }
    else{
      errorMsg=`Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMsg);
  }
}
