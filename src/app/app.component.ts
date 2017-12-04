import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {SERVER_URL} from '../config/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // public url: string = SERVER_URL + '/monitor/upload';
  // public uploader: FileUploader = new FileUploader({url: this.url});


  // public fileList: any[] = [];
  //
  // constructor() {
  //   this.upload();
  // }
  //
  // public upload() {
  //
  //   this.uploader.queue[0].upload(); // 开始上传
  //   this.uploader.queue[0].onSuccess = (response, status, headers) => {
  //     // 上传文件成功
  //     if (status == 200) {
  //       // 上传文件后获取服务器返回的数据
  //       let res = JSON.parse(response);
  //       console.log(res)
  //     } else {
  //       // 上传文件后获取服务器返回的数据错误
  //     }
  //   };
  // }
  //
  // selectedFileOnChanged() {
  //   // 这里是文件选择完成后的操作处理
  //   console.log("选择文件成功");
  // }

}
