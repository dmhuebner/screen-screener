import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimerPipe } from '../../pipes/timer.pipe';

@Component({
  selector: 'ss-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss'],
  providers: [TimerPipe]
})
export class TimeTrackerComponent implements OnInit {

  @Input() timeLength: number;
  @Input() timeLeft: number;
  @Input() timerOn: boolean;

  @Output() startClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resetClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() setTimeLeft: EventEmitter<number> = new EventEmitter<number>();

  constructor(private timerPipe: TimerPipe) { }

  ngOnInit() {
  }

  onStartClicked() {
    this.startClicked.emit(true);
  }

  onResetClicked() {
    this.resetClicked.emit(true);
  }

  formatSliderDisplay(seconds: number | null) {
    const wholeSeconds = Math.floor(seconds);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    let secondsLeft: number | string = wholeSeconds % 60;
    if (secondsLeft < 10) {
      secondsLeft = '0' + secondsLeft;
    }

    return hours ? `${hours}:${minutes}:${secondsLeft}` : `${minutes}:${secondsLeft}`;
  }

  setTimeTrackSlider(change) {
    console.log('change', change);
    this.setTimeLeft.emit(change.value);
  }
}
