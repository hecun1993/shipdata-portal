import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpService} from '../service/http.service';
import {MonitorDataService} from '../service/monitor.data.service';
import {FileUploadModule} from 'ng2-file-upload';
import {CommonModule} from '@angular/common';
import {LoginGuard} from './guard/login.guard';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {RoundComponent} from './round/round.component';
import {ShipComponent} from './ship/ship.component';
import {UploadComponent} from './upload/upload.component';
import {ExtensionComponent} from './extension/extension.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    UserComponent,
    MenuComponent,
    HeaderComponent,
    RoundComponent,
    ShipComponent,
    UploadComponent,
    ExtensionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpService,
    MonitorDataService,
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
