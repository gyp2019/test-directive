import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgFormComponent } from './ng-form/ng-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ng-if', component: NgIfComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'ng-style', component: NgStyleComponent },
  { path: 'ng-class', component: NgClassComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-form', component: NgFormComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
