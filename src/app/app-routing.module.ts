import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QComponent } from './q/q.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'q', component: QComponent },
  { path: 'test', component: TestComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
