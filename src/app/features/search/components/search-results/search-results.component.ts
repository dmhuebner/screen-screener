import { Component, Input, OnInit } from '@angular/core';
import SearchResultsResponse from '@shared/interfaces/searchResultsResponse.interface';

@Component({
  selector: 'ss-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: SearchResultsResponse;
  @Input() searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

}
