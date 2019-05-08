import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ss-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {

  @Input() timeLength: number;
  @Input() timeLeft: number;
  @Input() timerOn: boolean;

  @Output() startClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resetClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() setTimeLeft: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartClicked() {
    this.startClicked.emit(true);
  }

  onResetClicked() {
    this.resetClicked.emit(true);
  }

  // TODO move this if its reused
  formatSliderDisplay(seconds: number | null) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    let minutesLeft: number | string = minutes % 60;
    if (minutesLeft < 10) {
      minutesLeft = '0' + minutesLeft;
    }

    return `${hours}:${minutesLeft}`;
  }

  setTimeTrackSlider(change) {
    console.log('change', change);
    this.setTimeLeft.emit(change.value);
  }
}
