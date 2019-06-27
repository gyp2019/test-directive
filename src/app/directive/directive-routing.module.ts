import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectiveComponent } from './directive/directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';

const routes: Routes = [

  {
    path: 'directives',
    component: DirectiveComponent,
    children: [
      { path: '', redirectTo: '/directives/ng-if', pathMatch: 'full' },
      { path: 'ng-if', component: NgIfComponent },
      { path: 'ng-switch', component: NgSwitchComponent },
      { path: 'ng-style', component: NgStyleComponent },
      { path: 'ng-class', component: NgClassComponent },
      { path: 'ng-for', component: NgForComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
