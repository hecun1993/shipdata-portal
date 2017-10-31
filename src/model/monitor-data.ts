export class MonitorData {

  //监控轮次
  public roundId: string;

  //帆船的编号
  public shipNumber: string;

  //记录创建时间
  public createTime: number;

  //日期
  public date: string;

  //时间
  public time: string;

  //是否GPS已校准
  public isGPS: string;

  //南北纬
  public dimensionFlag: string;

  //纬度
  public dimension: string;

  //东西经
  public longitudeFlag: string;

  //经度
  public longitude: string;

  //船速
  public shipSpeed: string;

  //航向
  public shipDirection: string;

  //真风数据是否有效
  public isWindDataValid: string;

  //真风风速
  public realWindSpeed: string;

  //真风风向
  public realWindDirection: string;

  //风向角
  public windDirection: string;

  //左右倾角(R为右倾，L为左倾，Q为迎风情况下的倾斜，F为迎风情况下的反扣)
  public sidewardsInclination: string;

  //前后倾角
  public forwardDipAngle: string;

  //VMG
  public vmg: string;
}
