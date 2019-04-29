import { Component, Input, OnInit } from '@angular/core';
import ScreenProfileSummary from '@shared/interfaces/screenProfileSummary.interface';
import Screener from '../../interfaces/screener.interface';
import { TimerService } from '@shared/services/timer.service';

@Component({
  selector: 'ss-screener-container',
  templateUrl: './screener-container.component.html',
  styleUrls: ['./screener-container.component.scss']
})
export class ScreenerContainerComponent implements OnInit {

  @Input() screenProfileSummary: ScreenProfileSummary;
  @Input() screenerDetails: Screener;

  constructor(public timerService: TimerService) { }

  ngOnInit() {
  }

  startTimeTracker() {
    this.timerService.startTimer(this.screenerDetails.runTimeInMin * 60);
  }

  resetTimeTracker() {
    this.timerService.resetTimer();
  }

}
