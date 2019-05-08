import { Injectable } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { Observable } from 'rxjs';
import Screener from '../interfaces/screener.interface';
import ScreenerEvent from '../interfaces/screener-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScreenerService {

  constructor(private dataService: DataService<Screener>) { }

  createNewScreener(imdbId: string, screener: Screener): Promise<void> {
    screener.id = imdbId;
    return this.dataService.postNewItem('screeners/', screener, imdbId);
  }

  getScreenerDetails$(id: string): Observable<Screener> {
    return this.dataService.getItem$(`screeners/${id}`);
  }

  updateScreenerEvent(id: string, screener: Screener, screenerEvent: ScreenerEvent) {
    screener.events = screener.events ? screener.events : [];
    screener.events.push({
          ...screenerEvent,
          id: this.dataService.createId()
        });
    return this.dataService.updateItem(`screeners/${id}`, screener);
  }
}
