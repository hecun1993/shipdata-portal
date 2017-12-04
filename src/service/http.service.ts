import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {ApiResponse} from '../model/api.response';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  /**
   * 无参数的get请求
   * {withCredentials: true} 带cookie(JSESSIONID)发起请求
   *
   * @param {string} url
   * @returns {Promise<ApiResponse>}
   */
  public getWithNoParams(url: string): Promise<ApiResponse> {
    return this.http.get(url, {withCredentials: true})
      .map(res => res.json())
      .toPromise();
  }

  public get(url: string, paramObj: any): Promise<ApiResponse> {
    return this.http.get(url + this.toQueryString(paramObj))
      .map(res => res.json())
      .toPromise();
  }

  public post(url: string, paramObj: any) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
      .map(res => res.json())
      .toPromise()
  }

  public postBody(url: string, paramObj: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, paramObj, new RequestOptions({headers: headers}))
      .map(res => res.json())
      .toPromise()
  }

  public delete(url: string, paramObj: any): Promise<ApiResponse> {
    return this.http.delete(url + this.toQueryString(paramObj))
      .map(res => res.json())
      .toPromise();
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
