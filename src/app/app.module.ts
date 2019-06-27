import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DirectiveModule } from './directive/directive.module';
import { ReactiveModule } from './reactive/reactive.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [
    BrowserModule,
    DirectiveModule,
    ReactiveModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
