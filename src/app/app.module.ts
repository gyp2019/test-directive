import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
