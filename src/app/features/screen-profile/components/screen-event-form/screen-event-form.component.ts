import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EVENT_TYPE } from '../../constants/screen-event-form-event-type.constants';
import ScreenEventType from '../../interfaces/screenEventType.interface';
import ScreenerEvent from '../../interfaces/screener-event.interface';

@Component({
  selector: 'ss-screen-event-form',
  templateUrl: './screen-event-form.component.html',
  styleUrls: ['./screen-event-form.component.scss']
})
export class ScreenEventFormComponent implements OnInit, OnChanges {

  @Input() screenerEventDetails: ScreenerEvent;

  @Output() submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() formValuesChanged: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  screenEventForm: FormGroup;
  screenEventTypes: ScreenEventType[] = EVENT_TYPE;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.screenEventForm = this.populateScreenerDetailsForm(this.screenerEventDetails);
    /* Subscribe to formGroup valueChanges and emit changes */
    this.screenEventForm.valueChanges.subscribe(() => {
      this.formValuesChanged.emit(this.screenEventForm);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.screenEventForm = this.populateScreenerDetailsForm(changes.screenerEventDetails.currentValue);
    this.screenEventForm.valueChanges.subscribe(() => {
      this.formValuesChanged.emit(this.screenEventForm);
    });
  }

  onSubmit(): void {
    if (this.screenEventForm.valid) {
      this.submitted.emit(this.screenEventForm);
    }
  }

  populateScreenerDetailsForm(screenerEventDetails: ScreenerEvent): FormGroup {
    return this.fb.group({
      screenEventName: [screenerEventDetails.screenEventName, [Validators.required]],
      screenEventDescription: [screenerEventDetails.screenEventDescription, [Validators.required]],
      screenEventType: [screenerEventDetails.screenEventType, [Validators.required]]
    });
  }

}
