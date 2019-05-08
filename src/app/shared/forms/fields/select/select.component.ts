import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ss-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  // The form group that the input field is connected to
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
  // The angular material appearance that should be used
  @Input() options: any[];

  constructor() { }

  ngOnInit() {
  }

}
