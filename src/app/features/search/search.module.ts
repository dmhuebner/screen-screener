import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { SsFormsModule } from '@shared/forms';

@NgModule({
  declarations: [
      SearchContainerComponent
  ],
  imports: [
      CommonModule,
      SsFormsModule
  ],
  exports: [
      SearchContainerComponent
  ]
})
export class SearchModule { }
