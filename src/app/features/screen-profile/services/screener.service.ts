import { Injectable } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { Observable } from 'rxjs';
import Screener from '../interfaces/screener.interface';

@Injectable({
  providedIn: 'root'
})
export class ScreenerService {

  constructor(private dataService: DataService<Screener>) { }

  createNewScreener(imdbId: string, screener: Screener): Promise<void> {
    screener.id = imdbId;
    return this.dataService.postNewItem('screeners/', screener, imdbId);
  }

  // TODO need to type dataService better than object
  getScreenerDetails$(id: string): Observable<Screener> {
    return this.dataService.getItem$(`screeners/${id}`);
  }
}
