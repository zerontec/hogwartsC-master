import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import {Api} from '../config';
import {Characters} from '../models/bio'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  
public api: String = Api.url;


  constructor(private http: HttpClient) { }



  
getData(): Observable<Characters>{


  return this.http.get<Characters>(`${this.api}/students`)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
 
  
}

  
getDataP(): Observable<Characters>{


  return this.http.get<Characters>(`${this.api}/staff`)
  .pipe(
    retry(2),
    catchError(this.errorHandl)
  )
 
  
}

 // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

/* //Add user

CreateUser(data): Observable<Characters>{

  return this.http.post<Characters>(this.baseUrl + '/usuarios/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(),
    catchError(this.errorHandl)
  )



} */





 // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
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
