// //提前从服务器读取数据, 然后再进入路由
// import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
// import {MonitorData} from '../../model/monitor-data';
// import {Observable} from 'rxjs/Observable';
// import {HttpService} from '../../service/http.service';
// import {SERVER_URL} from '../../config/Constants';
// import {Injectable} from '@angular/core';
//
// //{path: 'monitor/data', component: MonitorDataComponent, resolve: {MonitorData: MonitorDataResolve}}
// @Injectable()
// export class MonitorDataResolve implements Resolve<MonitorData> {
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MonitorData | Observable<MonitorData> | Promise<MonitorData> {
//
//   }
//
//   // constructor(private router: Router,
//   //             private httpService: HttpService) {
//   // }
//   //
//   // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MonitorData | Observable<MonitorData> | Promise<MonitorData> {
//   //
//   //   let roundId: string = route.params['roundId'];
//   //
//   //   if (roundId === "") {
//   //     this.router.navigate(['/home']);
//   //     return undefined;
//   //   } else {
//   //     this.httpService.get(SERVER_URL + "/monitor/data", {roundId: roundId});
//   //   }
//   // }
//
// }
