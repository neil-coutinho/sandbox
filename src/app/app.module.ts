import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QComponent } from './q/q.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    QComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
