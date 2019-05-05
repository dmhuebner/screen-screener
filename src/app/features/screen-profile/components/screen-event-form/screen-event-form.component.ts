import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ss-screen-event-form',
  templateUrl: './screen-event-form.component.html',
  styleUrls: ['./screen-event-form.component.scss']
})
export class ScreenEventFormComponent implements OnInit, OnChanges {

  // TODO create type for screenEventDetails
  @Input() screenerEventDetails: any;

  @Output() submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() formValuesChanged: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  screenEventForm: FormGroup;

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

  populateScreenerDetailsForm(screenerDetails: any): FormGroup {
    return this.fb.group({
      screenEventDescription: [screenerDetails.screenEventDescription, [Validators.required]]
    });
  }

}
