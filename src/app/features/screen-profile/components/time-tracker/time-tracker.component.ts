import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ss-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {

  @Input() timeLeft: number;

  @Output() startClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resetClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onStartClicked() {
    this.startClicked.emit(true);
  }

  onResetClicked() {
    this.resetClicked.emit(true);
  }

}
