import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { SsFormsModule } from '@shared/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const DECLARATIONS = [
        SearchContainerComponent,
        SearchResultsComponent
    ];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
      CommonModule,
      SsFormsModule
  ],
  exports: [
      ...DECLARATIONS
  ]
})
export class SearchModule { }
