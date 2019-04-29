import { Component, OnInit } from '@angular/core';
import { SearchService } from '@shared/services/search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { concat, switchMap } from 'rxjs/operators';
import ScreenProfileSummary from '@shared/interfaces/screenProfileSummary.interface';
import { Observable, of } from 'rxjs';
import { ScreenerService } from '../../features/screen-profile/services/screener.service';

@Component({
  selector: 'ss-screen-profile',
  templateUrl: './screen-profile.component.html',
  styleUrls: ['./screen-profile.component.scss']
})
export class ScreenProfileComponent implements OnInit {

  screenProfileSummary: ScreenProfileSummary | object;
  // TODO type this better than object
  screenerDetails: object;

  constructor(private searchService: SearchService,
              private currentRoute: ActivatedRoute,
              private screenerService: ScreenerService) { }

  ngOnInit() {
    // // TODO combine these
    // this.currentRoute.params.pipe(
    //     switchMap((params: Params) => {
    //       return this.searchService.search(params.imdbId, true);
    //     })
    // ).subscribe((screenProfileSummary: ScreenProfileSummary) => {
    //   console.log(screenProfileSummary);
    //   this.screenProfileSummary = screenProfileSummary;
    // });
    //
    // this.currentRoute.params.pipe(
    //     switchMap((params: Params) => {
    //       return this.screenerService.getScreenerDetails$(params.imdbId);
    //     }),
    //     switchMap((screenerDetails) => {
    //       if (screenerDetails) {
    //         return of(screenerDetails);
    //       } else {
    //         return of(null);
    //       }
    //     })
    // ).subscribe((screenerDetails) => {
    //   console.log('screenerDetails', screenerDetails);
    //   this.screenerDetails = screenerDetails;
    //
    //   if (this.screenProfileSummary && this.screenerDetails) {
    //     // TODO check that the two runTimes still match - if not, pop a toastr
    //   }
    // });
  }

}
