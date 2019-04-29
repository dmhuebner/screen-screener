import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { ScreenProfileSummaryComponent } from './components/screen-profile-summary/screen-profile-summary.component';
import { ScreenerContainerComponent } from './containers/screener-container/screener-container.component';
import { ScreenProfileContainerComponent } from './containers/screen-profile-container/screen-profile-container.component';

@NgModule({
  declarations: [
      ScreenProfileSummaryComponent,
      ScreenerContainerComponent,
      ScreenProfileContainerComponent
  ],
  imports: [
      CommonModule,
      MatCardModule
  ],
  exports: [
      MatCardModule,
      ScreenProfileSummaryComponent,
      ScreenerContainerComponent,
      ScreenProfileContainerComponent
  ]
})
export class ScreenProfileModule { }
