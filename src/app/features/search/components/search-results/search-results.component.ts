import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import SearchResultsResponse from '@shared/interfaces/searchResultsResponse.interface';

@Component({
  selector: 'ss-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: SearchResultsResponse;
  @Input() searchTerm: string;

  @Output() searchItemSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectSearchItem(id: string) {
    this.searchItemSelected.emit(id);
  }

}
