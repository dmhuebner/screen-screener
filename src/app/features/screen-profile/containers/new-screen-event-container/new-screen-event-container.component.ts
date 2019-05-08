import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import ScreenerEvent from '../../interfaces/screener-event.interface';
import Screener from '../../interfaces/screener.interface';
import { ScreenerService } from '../../services/screener.service';

@Component({
  selector: 'ss-new-screen-event-container',
  templateUrl: './new-screen-event-container.component.html',
  styleUrls: ['./new-screen-event-container.component.scss']
})
export class NewScreenEventContainerComponent implements OnInit {

  @Input() currentScreenProfile: Screener;
  @Input() currentScreenTime: number;
  @Input() screenTimeLengthInMin: number;

  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cancelled: EventEmitter<boolean> = new EventEmitter<boolean>();

  screenerEventDetails: ScreenerEvent;
  submitDisabled: boolean = true;

  constructor(private screenerService: ScreenerService) { }

  ngOnInit() {
    this.screenerEventDetails = this.initializeScreenerDetailsForm();
  }

  onAddNewEvent(newEvent) {
    console.log('newEvent to add', newEvent);
    this.screenerEventDetails = this.initializeScreenerDetailsForm();
    this.screenerService.updateScreenerEvent(this.currentScreenProfile.id, this.currentScreenProfile, newEvent).then(() => {
      this.submitted.emit(true);
    });
  }

  onCancel() {
    console.log('add event cancelled');
    this.screenerEventDetails = this.initializeScreenerDetailsForm();
    this.cancelled.emit(true);
  }

  onFormValuesChanged(form: FormGroup) {
    this.submitDisabled = !form.valid;
  }

  private initializeScreenerDetailsForm(): ScreenerEvent {
    return {
      screenEventName: '',
      screenEventDescription: '',
      screenEventType: '',
      screenEventTimeInSec: this.currentScreenTime
    };
  }

}
