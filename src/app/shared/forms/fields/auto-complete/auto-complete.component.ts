import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ss-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

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
  // The angular material appearance that should be used
  @Input() options: any[];

  filteredOptions$: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions$ = this.group.controls[this.controlName].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.display.toLowerCase().includes(filterValue));
  }

}
