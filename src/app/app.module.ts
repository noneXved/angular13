import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServerComponent} from "./servers/server/server.component";
import {UserComponent} from "./users/user/user.component";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
