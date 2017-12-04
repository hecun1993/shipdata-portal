import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ShipComponent} from './ship/ship.component';
import {UploadComponent} from './upload/upload.component';
import {MonitorDataComponent} from './monitor-data/monitor-data.component';
import {NgxEchartsModule} from 'ngx-echarts';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'ship', component: ShipComponent},
  {path: 'monitor', component: MonitorDataComponent},
  {path: 'upload', component: UploadComponent, canActivate: [LoginGuard]},
  {path: 'user', component: UserComponent, canActivate: [LoginGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    UserComponent,
    MenuComponent,
    HeaderComponent,
    ShipComponent,
    UploadComponent,
    MonitorDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    CommonModule,
    NgxEchartsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    HttpService,
    MonitorDataService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
