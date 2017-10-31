import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {HttpService} from './http.service';
import {SERVER_URL} from '../config/Constants';

@Injectable()
export class MonitorDataService {

  constructor(private httpService: HttpService) {
  }

  getMonitorDatas() {
    // return this.httpService.get(SERVER_URL + '/monitor/data', null);
    return this.httpService.get(SERVER_URL + '/monitor/data', {'roundId':'rkNQye3V'});
  }
}
