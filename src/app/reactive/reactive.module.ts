import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ManagingControlValuesComponent } from './managing-control-values/managing-control-values.component';
import { GroupingFormControlsComponent } from './grouping-form-controls/grouping-form-controls.component';
import { CreatingNestedFormGroupsComponent } from './creating-nested-form-groups/creating-nested-form-groups.component';
import { GeneratingFormControlsWithFormbuilderComponent } from './generating-form-controls-with-formbuilder/generating-form-controls-with-formbuilder.component';
import { DynamicControlsUsingFormArraysComponent } from './dynamic-controls-using-form-arrays/dynamic-controls-using-form-arrays.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule,
  ],
  declarations: [
    ReactiveFormsComponent,
    GettingStartedComponent,
    ManagingControlValuesComponent,
    GroupingFormControlsComponent,
    CreatingNestedFormGroupsComponent,
    GeneratingFormControlsWithFormbuilderComponent,
    DynamicControlsUsingFormArraysComponent,
  ],
})
export class ReactiveModule { }
