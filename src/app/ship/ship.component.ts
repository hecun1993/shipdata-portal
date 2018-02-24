import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {ActivatedRoute, Params} from '@angular/router';
import {SERVER_URL} from '../../config/Constants';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  public shipImage: string;
  public shipNumber: string;

  dataSource: Observable<any>;

  constructor(private httpService: HttpService,
              private activatedRoute: ActivatedRoute,
              private http: Http) {
    this.httpService.getWithNoParams(SERVER_URL + '/ship/all')
      .then(response => {
        this.dataSource = response.data;
      })
  }

  ngOnInit() {

    //参数订阅
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.shipNumber = params['shipNumber'];

      this.httpService.get(SERVER_URL + '/ship', {'shipNumber': this.shipNumber})
        .then((res) => {
          console.log(res);
          if (res.code == 0) {
            this.shipImage = res.data['shipImage'];
            console.log(this.shipImage);
          }
        });
    });

  }

}
