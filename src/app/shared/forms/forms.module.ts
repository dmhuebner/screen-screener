import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { RaisedButtonComponent } from './fields/raised-button/raised-button.component';
import { CheckboxFieldComponent } from './fields/checkbox-field/checkbox-field.component';
import { FabComponent } from './fields/fab/fab.component';

const DECLARATIONS: any[] = [
  InputFieldComponent,
  RaisedButtonComponent,
  FabComponent,
  CheckboxFieldComponent
];

const MATERIAL_MODULES: any = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule
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
