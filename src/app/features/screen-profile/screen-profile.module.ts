import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatSliderModule } from '@angular/material';
import { ScreenProfileSummaryComponent } from './components/screen-profile-summary/screen-profile-summary.component';
import { ScreenerContainerComponent } from './containers/screener-container/screener-container.component';
import { ScreenProfileContainerComponent } from './containers/screen-profile-container/screen-profile-container.component';
import { TimeTrackerComponent } from './components/time-tracker/time-tracker.component';
import { TimerPipe } from './pipes/timer.pipe';

const DECLARATIONS = [
    ScreenProfileSummaryComponent,
    ScreenerContainerComponent,
    ScreenProfileContainerComponent,
    TimeTrackerComponent,
    TimerPipe
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
      CommonModule,
      MatCardModule,
      MatSliderModule
  ],
  exports: [
      MatCardModule,
      ...DECLARATIONS
  ]
})
export class ScreenProfileModule { }
