import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {HttpService} from './http.service';
import {SERVER_URL} from '../config/Constants';

@Injectable()
export class MonitorDataService {

  constructor(private httpService: HttpService) {
  }

  /**
   * 根据 帆船编号(shipNumber) 时间(date) 轮次(roundId) 查询到监控数据
   *
   * @param {string} roundId
   * @param {string} shipNumber
   * @param {string} date
   * @returns {Promise<ApiResponse>}
   */
  getMonitorDatasByShipNumber(roundId: string, shipNumber: string, date: string) {
    return this.httpService.get(SERVER_URL + '/monitor/datas', {'roundId': roundId, 'shipNumber': shipNumber, 'date': date});
  }
}
