import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatSliderModule } from '@angular/material';
import { ScreenProfileSummaryComponent } from './components/screen-profile-summary/screen-profile-summary.component';
import { ScreenerContainerComponent } from './containers/screener-container/screener-container.component';
import { ScreenProfileContainerComponent } from './containers/screen-profile-container/screen-profile-container.component';
import { TimeTrackerComponent } from './components/time-tracker/time-tracker.component';
import { TimerPipe } from './pipes/timer.pipe';
import { SsFormsModule } from '@shared/forms';
import { NewScreenEventContainerComponent } from './containers/new-screen-event-container/new-screen-event-container.component';
import { ScreenEventFormComponent } from './components/screen-event-form/screen-event-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DECLARATIONS = [
    ScreenProfileSummaryComponent,
    ScreenerContainerComponent,
    ScreenProfileContainerComponent,
    TimeTrackerComponent,
    TimerPipe,
    NewScreenEventContainerComponent,
    ScreenEventFormComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
      CommonModule,
      MatCardModule,
      MatSliderModule,
      SsFormsModule,
      ReactiveFormsModule,
      FormsModule
  ],
  exports: [
      MatCardModule,
      ...DECLARATIONS
  ]
})
export class ScreenProfileModule { }
