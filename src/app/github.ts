import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Github {

  constructor(private readonly http: HttpClient) {}

  public getUser(username: string): Observable<any> {
    return this.http.get<any>('https://api.github.com/users/${username}');
  }
}
