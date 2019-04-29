import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import ScreenProfileSummary from '@shared/interfaces/screenProfileSummary.interface';
import { of } from 'rxjs';
import { SearchService } from '@shared/services/search.service';
import { ScreenerService } from '../../services/screener.service';
import Screener from '../../interfaces/screener.interface';

@Component({
  selector: 'ss-screen-profile-container',
  templateUrl: './screen-profile-container.component.html',
  styleUrls: ['./screen-profile-container.component.scss']
})
export class ScreenProfileContainerComponent implements OnInit {

  screenProfileSummary: ScreenProfileSummary;
  // TODO type this better than object
  screenerDetails: object;
  currentImdbId: string;

  constructor(private searchService: SearchService,
              private currentRoute: ActivatedRoute,
              private screenerService: ScreenerService) { }

  ngOnInit() {
    // TODO combine these
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
              map((screenerDetails) => {
                if (screenerDetails) {
                  return screenerDetails;
                } else {
                  const newScreener: Screener = {
                    runTimeInMin: Number(this.screenProfileSummary.Runtime.split(' ')[0]),
                    title: this.screenProfileSummary.Title,
                    id: null
                  };
                  return this.screenerService.createNewScreener(this.currentImdbId, newScreener).then(result => result);
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
