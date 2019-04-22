import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ss-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {

  // The form group that the input field is connected to
  @Input() group: FormGroup;
  // The name of the form control on the group
  @Input() controlName: string;

  constructor() { }

  ngOnInit() {
  }

}
