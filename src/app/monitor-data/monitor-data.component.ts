import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {MonitorDataService} from '../../service/monitor.data.service';

@Component({
  selector: 'app-monitor-data',
  templateUrl: './monitor-data.component.html',
  styleUrls: ['./monitor-data.component.css']
})
export class MonitorDataComponent implements OnInit {

  /**
   * 表单查询参数
   */
  public shipNumber: string;
  public date: string;
  public roundId: string;

  /**
   * 图表的横轴(时间)
   */
  public timeArray = [];

  /**
   * 图表1的纵轴1: 帆船方向的数组
   */
  public shipDirectionArrays = [];

  /**
   * 图表1的纵轴2: 风的方向的数组
   */
  public windDirectionArrays = [];

  /**
   * 图表2的纵轴1: 帆船速度的数组
   */
  public shipSpeedArrays = [];

  /**
   * 图表2的纵轴2: 帆船速度的数组
   */
  public windSpeedArrays = [];

  /**
   * 用来显示图表1
   */
  public echartOptionForDirection: any;

  /**
   * 用来显示图表2
   */
  public echartOptionForSpeed: any;

  constructor(private monitorDataService: MonitorDataService) {
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    this.date = value.date;
    this.shipNumber = value.shipNumber;
    this.roundId = value.roundId;

    // this.date = '2017-01-10';
    // this.shipNumber = '02';
    // this.roundId = '05';

    console.log(this.shipNumber);

    this.monitorDataService.getMonitorDatasByShipNumber(this.roundId, this.shipNumber, this.date)
      .then(res => {
        console.log(res.data);
        console.log(res.code);

        if (res.code == 0) {

          for (let i = 1; i < res.data.length; i = i + 25) {
            this.shipDirectionArrays.push(parseFloat(res.data[i]["shipDirection"]));
            this.windDirectionArrays.push(parseFloat(res.data[i]["windDirection"]));
            this.shipSpeedArrays.push(parseFloat(res.data[i]["shipSpeed"]));
            this.windSpeedArrays.push(parseFloat(res.data[i]["realWindSpeed"]));

            this.timeArray.push(res.data[i]["time"]);
          }
          console.log(this.shipDirectionArrays);
          console.log(this.windDirectionArrays);
          console.log(this.shipSpeedArrays);
          console.log(this.windSpeedArrays);

          console.log(this.timeArray);

          //图表1
          this.echartOptionForDirection = {
            title: {
              text: ''
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['ShipDirection', 'WindDirection']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: this.timeArray
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: 'ShipDirection',
                type: 'line',
                data: this.shipDirectionArrays
              },
              {
                name: 'WindDirection',
                type: 'line',
                data: this.windDirectionArrays
              }
            ]
          };

          //图表2
          this.echartOptionForSpeed =  {
            title: {
              text: ''
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['ShipSpeed', 'WindSpeed']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: this.timeArray
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: 'ShipDirection',
                type: 'line',
                data: this.shipSpeedArrays
              },
              {
                name: 'WindDirection',
                type: 'line',
                data: this.windSpeedArrays
              }
            ]
          };

        } else {
          alert(res.message);
        }
      });
  }
}
