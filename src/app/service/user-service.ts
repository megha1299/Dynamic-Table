import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private apiUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';

  constructor(private http: HttpClient) {}

  /* Function to get users data **/
  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
