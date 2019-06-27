import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectiveRoutingModule } from './directive-routing.module';

import { DirectiveComponent } from './directive/directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectiveRoutingModule,
  ],
  declarations: [
    DirectiveComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
  ],
})
export class DirectiveModule { }
