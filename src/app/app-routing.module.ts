import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {UserComponent} from "./users/user/user.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: 'users/:id/:name', component: UsersComponent},
    ] },
  {path: 'servers', component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: ServersComponent}
    ] },
  {path: 'not-found', component: PageNotFoundComponent},
  //Do nothing - but should protect from '' '/recipes'
  { path: '', redirectTo: '/not-found', pathMatch: 'full' },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}


