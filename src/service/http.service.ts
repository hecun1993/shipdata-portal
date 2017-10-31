import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }

  public get(url: string, paramObj: any) {
    // return this.http.get(url + "?roundId=rkNQye3V")
    console.log(this.toQueryString(paramObj));

    return this.http.get(url + this.toQueryString(paramObj))
      .toPromise()
      .then(res => this.handlerSuccess(res.json()))
      .catch(error => this.handlerError(error));
  }

  public post(url: string, paramObj: any) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
      .toPromise()
      .then(res => this.handlerSuccess(res.json()))
      .catch(error => this.handlerError(error));
  }

  public postBody(url: string, paramObj: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, paramObj, new RequestOptions({headers: headers}))
      .toPromise()
      .then(res => this.handlerSuccess(res.json()))
      .catch(error => this.handlerError(error));
  }

  private handlerSuccess(result: any) {
    if (result && result.code == 0) {
      console.log(result.data);
      return result.data;
    }
  }

  private handlerError(error: Response | any) {
    let msg = '请求失败';
    if (error.code == 10) {
      msg = 'error!';
    }
    if (error.code == 11) {
      msg = 'user not exist!';
    }
    if (error.code == 12) {
      msg = 'data file error!';
    }
    if (error.code == 13) {
      msg = 'batch job error!';
    }
    return {success: false, msg: msg};
  }

  /**
   * @param obj　参数对象
   * @return {string}　参数字符串
   * @example
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "?name=小军&age=23"
   */
  private toQueryString(obj) {
    let ret = [];
    for (let key in obj) {
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    return '?' + ret.join('&');
  }

  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + (value === null ? '' : String(value));
  }

  /**
   *
   * @param obj
   * @return {string}
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "name=小军&age=23"
   */
  private toBodyString(obj) {
    let ret = [];
    for (let key in obj) {
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    return ret.join('&');
  }
}

export class ApiResponse {

  code: number;

  message: string;

  data: any;

}
