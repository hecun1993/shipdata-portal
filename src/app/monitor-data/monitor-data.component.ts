import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {MonitorDataService} from '../../service/monitor.data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-monitor-data',
  templateUrl: './monitor-data.component.html',
  styleUrls: ['./monitor-data.component.css']
})
export class MonitorDataComponent implements OnInit {

  //用来和模板做数据绑定
  monitorDatas;

  constructor(private monitorDataService: MonitorDataService,
              private routeInfo: ActivatedRoute) {
    this.getMonitorDatas();
  }

  getMonitorDatas() {
    this.monitorDataService.getMonitorDatas()
      .then(res => {
        this.monitorDatas = res;
      });
  }

  ngOnInit(): void {
    this.routeInfo.data.subscribe((data: {monitorDatas: Array<any>}) => {
      this.monitorDatas = data;
    });
  }
}
