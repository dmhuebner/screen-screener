import { Injectable } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenerService {

  constructor(private dataService: DataService<object>) { }

  // TODO needs to be typed
  createNewScreener(imdbId, screener) {
    screener.id = imdbId;
    return this.dataService.postNewItem('screeners/', screener, imdbId);
  }

  // TODO need to type dataService better than object
  getScreenerDetails$(id: string): Observable<object> {
    return this.dataService.getItem$(`screeners/${id}`);
  }
}
