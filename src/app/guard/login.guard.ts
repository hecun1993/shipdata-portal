import {CanActivate, Router} from '@angular/router';
import {HttpService} from '../../service/http.service';
import {SERVER_URL} from '../../config/Constants';
import {Injectable} from '@angular/core';

//守卫
//{path: 'monitor/data', component: MonitorDataComponent, canActivate: [LoginGuard]}
@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  canActivate() {
    return this.httpService.getWithNoParams(SERVER_URL + '/user/me').then(
      res => {
        if (res.code != 0) {
          alert("You have to login first!");
          this.router.navigate(['/home']);
          return false;
        } else {
          return true;
        }
      }
    );
  }

}
