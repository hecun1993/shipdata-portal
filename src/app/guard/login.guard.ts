import {CanActivate} from '@angular/router';

//登录的守卫
//{path: 'monitor/data', component: MonitorDataComponent, canActivate: [LoginGuard]}
export class LoginGuard implements CanActivate{

  canActivate() {

    let isLogin: boolean = Math.random() < 0.5;

    if (!isLogin) {
      console.log("用户未登录");
    }

    return isLogin;
  }

}
