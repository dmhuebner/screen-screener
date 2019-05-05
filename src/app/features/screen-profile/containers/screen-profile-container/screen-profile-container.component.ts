import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import ScreenProfileSummary from '@shared/interfaces/screenProfileSummary.interface';
import { Observable, of } from 'rxjs';
import { SearchService } from '@shared/services/search.service';
import { ScreenerService } from '../../services/screener.service';
import Screener from '../../interfaces/screener.interface';
import { fromPromise } from 'rxjs/internal-compatibility';

@Component({
  selector: 'ss-screen-profile-container',
  templateUrl: './screen-profile-container.component.html',
  styleUrls: ['./screen-profile-container.component.scss']
})
export class ScreenProfileContainerComponent implements OnInit {

  screenProfileSummary: ScreenProfileSummary;
  screenerDetails: Screener;
  currentImdbId: string;

  constructor(private searchService: SearchService,
              private currentRoute: ActivatedRoute,
              private screenerService: ScreenerService) { }

  ngOnInit() {
    this.currentRoute.params.pipe(
        switchMap((params: Params) => {
          this.currentImdbId = params.imdbId;
          return this.searchService.search(params.imdbId, true);
        }),
        map((screenProfileSummary: ScreenProfileSummary) => {
          console.log('screenProfileSummary', screenProfileSummary);
          this.screenProfileSummary = screenProfileSummary;
          return this.currentImdbId;
        }),
        switchMap((imdbId: string) => {
          return this.screenerService.getScreenerDetails$(imdbId).pipe(
              switchMap((screenerDetails: Screener): Observable<Screener | void> => {
                if (screenerDetails) {
                  return of(screenerDetails);
                } else {
                  const newScreener: Screener = {
                    runTimeInMin: Number(this.screenProfileSummary.Runtime.split(' ')[0]),
                    title: this.screenProfileSummary.Title,
                    id: null
                  };
                  return fromPromise(this.screenerService.createNewScreener(this.currentImdbId, newScreener).then(res => res));
                }
              })
          );
        })
    ).subscribe((screenerDetails: any) => {
      console.log('screenerDetails', screenerDetails);
      this.screenerDetails = screenerDetails;
    });
  }

}
