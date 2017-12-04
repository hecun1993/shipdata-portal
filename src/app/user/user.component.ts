import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {SERVER_URL} from '../../config/Constants';
import {Router} from '@angular/router';

@Component({
	  selector: 'app-user',
	  templateUrl: './user.component.html',
	  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user_name: string;
  public mail: string;
  public pass_word: string;

  public userArray = [];

	constructor(private httpService: HttpService,
              private router: Router) { }

	ngOnInit() {
	  this.httpService.getWithNoParams(SERVER_URL + '/user').then(
      (res) => {
        if (res.code == 0) {
          res.data.forEach((result) => {
            this.userArray.push(result);
          });

          console.log(this.userArray);
        }
      }
    );
	}

  /**
   * 拿到前端输入的用户名, 用来修改用户信息
   * @param event
   */
  collectUsername(event) {
	  this.user_name = event.target.value;
	  console.log(this.user_name);
  }

  /**
   * 拿到前端输入的用户密码, 用来修改用户信息
   * @param event
   */
  collectPassword(event) {
    this.pass_word = event.target.value;
    console.log(this.pass_word);
  }

  /**
   * 拿到前端输入的邮箱, 用来修改用户信息
   * @param event
   */
  collectEmail(event) {
    this.mail = event.target.value;
    console.log(this.mail);
  }

  /**
   * 修改用户信息的方法
   * @param {string} username
   * @param password
   * @param {string} email
   */
  updateUser(username: string, password: string, email: string) {
	  console.log(this.user_name);
	  console.log(this.mail);

	  this.httpService.post(SERVER_URL + '/user/update', {'username': username, 'password': password, 'email': email})
      .then(res => {
        console.log(res.message);
      });

    location.reload();
  }

  /**
   * 删除用户信息
   * @param {string} username
   */
  deleteUser(username: string) {
    console.log(username);
    this.httpService.get(SERVER_URL + '/user/delete', {'username': username})
      .then((res) => {
        console.log(res);
      });

    location.reload();
  }
}
