import { Component, OnInit } from '@angular/core';
import { SearchService } from '@shared/services/search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import ScreenProfileSummary from '@shared/interfaces/screenProfileSummary.interface';

@Component({
  selector: 'ss-screen-profile',
  templateUrl: './screen-profile.component.html',
  styleUrls: ['./screen-profile.component.scss']
})
export class ScreenProfileComponent implements OnInit {

  screenProfileSummary: ScreenProfileSummary | object;

  constructor(private searchService: SearchService,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute.params.pipe(
        switchMap((params: Params) => {
          return this.searchService.search(params.imdbId, true);
        })
    ).subscribe((screenDetails: ScreenProfileSummary) => {
      console.log(screenDetails);
      this.screenProfileSummary = screenDetails;
    });
  }

}
