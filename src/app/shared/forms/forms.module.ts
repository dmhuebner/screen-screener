import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { RaisedButtonComponent } from './fields/raised-button/raised-button.component';
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { FabComponent } from './fields/fab/fab.component';
import { TextAreaFieldComponent } from '@shared/forms/fields/text-area-field/text-area-field.component';
import { AutoCompleteComponent, SelectComponent } from '@shared/forms/fields';

const DECLARATIONS: any[] = [
    InputFieldComponent,
    RaisedButtonComponent,
    FabComponent,
    CheckboxFieldComponent,
    TextAreaFieldComponent,
    AutoCompleteComponent,
    SelectComponent
];

const MATERIAL_MODULES: any = [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSelectModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
      CommonModule,
      ReactiveFormsModule,
      ...MATERIAL_MODULES
  ],
  exports: DECLARATIONS
})
export class SsFormsModule { }
