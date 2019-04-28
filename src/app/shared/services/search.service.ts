import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string, searchById: boolean = false): Observable<object> {
    // TODO add functionality to search by Title if general search doesn't work?
    const typeOfSearch = searchById ? 'i' : 's';
    let url = `${environment.omdbBaseUrl}?apikey=${environment.omdbAPIKey}&${typeOfSearch}=${searchTerm}`;
    url += !searchById ? '*' : '';

    return this.http.get(url);
  }
}
