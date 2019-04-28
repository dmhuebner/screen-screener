import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '@shared/services/search.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import SearchResultsResponse from '@shared/interfaces/searchResultsResponse.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchFormGroup: FormGroup;
  searchResults: SearchResultsResponse;

  constructor(private searchService: SearchService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.searchFormGroup = this.fb.group({
      searchTerm: [''],
    });

    this.searchFormGroup.valueChanges.pipe(
        debounceTime(600),
        switchMap(() => {
          if (this.searchFormGroup.value.searchTerm) {
            return this.search();
          } else {
            return of(null);
          }
        })
    ).subscribe((searchResultsResponse: SearchResultsResponse): void => {
      console.log(searchResultsResponse);
      this.searchResults = searchResultsResponse;
    });
  }

  search() {
    return this.searchService.search(this.searchFormGroup.value.searchTerm);
  }

  goToScreenProfile(id: string): Promise<boolean> {
    return this.router.navigate(['screen-profile/', id]);
  }

  noSubmit(event) {
    event.preventDefault();
  }

}
