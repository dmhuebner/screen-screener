import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import SearchResult from '../../shared/interfaces/searchResult.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

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
