import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgFormComponent } from "./ng-form/ng-form.component";
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidatorExplicitComponent } from './form-validator-explicit/form-validator-explicit.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ManagingControlValuesComponent } from './managing-control-values/managing-control-values.component';
import { GroupingFormControlsComponent } from './grouping-form-controls/grouping-form-controls.component';
import { CreatingNestedFormGroupsComponent } from './creating-nested-form-groups/creating-nested-form-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    TopbarComponent,
    NgForComponent,
    NgFormComponent,
    FormBuilderComponent,
    FormValidatorExplicitComponent,
    ReactiveFormsComponent,
    GettingStartedComponent,
    ManagingControlValuesComponent,
    GroupingFormControlsComponent,
    CreatingNestedFormGroupsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
