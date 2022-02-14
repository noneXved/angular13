import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
