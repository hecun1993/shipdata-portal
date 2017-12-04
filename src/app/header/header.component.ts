import {Component} from '@angular/core';
import {SERVER_URL} from '../../config/Constants';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isSignInMessage: string;

  beforeSignInMessage: string = 'Please Sign In';

  afterSignInMessage: string = 'welcome';

  constructor(private httpService: HttpService) {

    this.httpService.getWithNoParams(SERVER_URL + '/user/me').then(
      res => {
        if (res.code == 0) {
          console.log(res.code);
          this.isSignInMessage = res.data.username + ', ' + this.afterSignInMessage;
        } else {
          this.isSignInMessage = this.beforeSignInMessage;
        }
      }
    );
  }

}
