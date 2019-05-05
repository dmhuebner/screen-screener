import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ss-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  // The form group that the input field is connected to
  @Input() group: FormGroup;
  // The name of the form control on the group
  @Input() controlName: string;
  // The type of input field that should be used
  @Input() inputType: 'text' | 'number' = 'text';
  // The material theme color
  @Input() color: string;
  // The placeholder for the input
  @Input() placeholder: string = null;
  // The angular material appearance that should be used
  @Input() appearance = 'standard';
  // Indicates whether the field should have autocomplete
  @Input() autoComplete: 'off' | 'on' = 'off';

  constructor() { }

  ngOnInit() {
  }

}
