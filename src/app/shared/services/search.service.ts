import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<object> {
    // TODO add functionality to search by Title if general search doesn't work?
    const url = `${environment.omdbBaseUrl}?apikey=${environment.omdbAPIKey}&s=${searchTerm}*`;
    return this.http.get(url);
  }
}
