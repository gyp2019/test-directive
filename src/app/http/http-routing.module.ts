import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpComponent } from './http/http.component';

const routes: Routes = [
  {
    path: 'http',
    component: HttpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule { }
