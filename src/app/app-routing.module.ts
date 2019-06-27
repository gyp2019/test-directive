import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidatorExplicitComponent } from './form-validator-explicit/form-validator-explicit.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ManagingControlValuesComponent } from './managing-control-values/managing-control-values.component';
import { GroupingFormControlsComponent } from './grouping-form-controls/grouping-form-controls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ng-if', component: NgIfComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'ng-style', component: NgStyleComponent },
  { path: 'ng-class', component: NgClassComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-form', component: NgFormComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-validator-ex', component: FormValidatorExplicitComponent },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
    children: [
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'managing-control-values', component: ManagingControlValuesComponent },
      { path: 'grouping-fomr-controls', component: GroupingFormControlsComponent },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
