import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpRoutingModule } from './http-routing.module';

import { HttpComponent } from './http/http.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpRoutingModule,
  ],
  declarations: [
    HttpComponent,
  ],
})
export class HttpModule { }
