
import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import {Api} from '../config';
import {Characters} from '../models/bio'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  public api: String = Api.url;

  constructor(private http: HttpClient) {}

  getDataG(): Observable<Characters> {
    return this.http
      .get<Characters>(`${this.api}/house/gryffindor`)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getDataS(): Observable<Characters> {
    return this.http
      .get<Characters>(`${this.api}/house/slytherin`)
      .pipe(retry(2), catchError(this.errorHandl));
  }

  getDataH(): Observable<Characters> {
    return this.http
      .get<Characters>(`${this.api}/house/hufflepuff`)
      .pipe(retry(3), catchError(this.errorHandl));
  }

  getDataR(): Observable<Characters> {
    return this.http
      .get<Characters>(`${this.api}/house/ravenclaw`)
      .pipe(retry(4), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}



