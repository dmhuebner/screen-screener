import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import ScreenerEvent from '../../interfaces/screener-event.interface';

@Component({
  selector: 'ss-new-screen-event-container',
  templateUrl: './new-screen-event-container.component.html',
  styleUrls: ['./new-screen-event-container.component.scss']
})
export class NewScreenEventContainerComponent implements OnInit {

  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  screenerEventDetails: ScreenerEvent;
  submitDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
    this.screenerEventDetails = this.initializeScreenerDetailsForm();
  }

  onAddNewEvent(newEvent) {
    console.log('newEvent to add', newEvent);
    this.screenerEventDetails = this.initializeScreenerDetailsForm();
    this.submitted.emit(true);
  }

  onCancel() {
    console.log('add event cancelled');
    this.screenerEventDetails = this.initializeScreenerDetailsForm();
  }

  onFormValuesChanged(form: FormGroup) {
    this.submitDisabled = !form.valid;
  }

  private initializeScreenerDetailsForm(): ScreenerEvent {
    return {
      screenEventName: '',
      screenEventDescription: '',
      screenEventType: ''
    };
  }

}
