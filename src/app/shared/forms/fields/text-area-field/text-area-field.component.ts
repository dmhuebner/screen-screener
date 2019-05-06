import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ss-text-area-field',
  templateUrl: './text-area-field.component.html',
  styleUrls: ['./text-area-field.component.scss']
})
export class TextAreaFieldComponent implements OnInit {

  // The form group that the text-area field is connected to
  @Input() group: FormGroup;
  // The name of the form control on the group
  @Input() controlName: string;
  // The material theme color
  @Input() color: string;
  // The placeholder for the input
  @Input() placeholder: string = null;
  // The angular material appearance that should be used
  @Input() appearance = 'standard';
  // Indicates whether a star should be added to indicate the field is required
  @Input() required: boolean = false;
  // How many rows to default in text-area
  @Input() rows: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
