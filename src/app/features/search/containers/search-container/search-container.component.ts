import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import SearchResult from '@shared/interfaces/searchResult.interface';
import { SearchService } from '@shared/services/search.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'ss-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchTerm: string;
  searchFormGroup: FormGroup;
  searchResults: SearchResult[];

  constructor(private searchService: SearchService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFormGroup = this.fb.group({
      searchTerm: ['', [Validators.required]],
    });

    this.searchFormGroup.valueChanges.pipe(
        debounceTime(1000),
        switchMap(() => {
          if (this.searchFormGroup.value.searchTerm) {
            return this.search();
          } else {
            return of(null);
          }
        })
    ).subscribe((searchResults: SearchResult[]): void => {
      console.log(searchResults);
      this.searchResults = searchResults;
    });
  }

  search() {
    return this.searchService.search(this.searchFormGroup.value.searchTerm);
  }

}
