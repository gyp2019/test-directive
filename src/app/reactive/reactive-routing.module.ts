import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ManagingControlValuesComponent } from './managing-control-values/managing-control-values.component';
import { GroupingFormControlsComponent } from './grouping-form-controls/grouping-form-controls.component';
import { CreatingNestedFormGroupsComponent } from './creating-nested-form-groups/creating-nested-form-groups.component';
import { GeneratingFormControlsWithFormbuilderComponent } from './generating-form-controls-with-formbuilder/generating-form-controls-with-formbuilder.component';

const routes: Routes = [
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
    children: [
      { path: '', redirectTo: '/reactive-forms/getting-started', pathMatch: 'full' },
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'managing-control-values', component: ManagingControlValuesComponent },
      { path: 'grouping-form-controls', component: GroupingFormControlsComponent },
      { path: 'creating-nested-form-groups', component: CreatingNestedFormGroupsComponent },
      { path: 'generating-form-controls-with-formbuilder', component: GeneratingFormControlsWithFormbuilderComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
