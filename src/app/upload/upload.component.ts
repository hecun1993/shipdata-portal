import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {SERVER_URL} from '../../config/Constants';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public url: string = SERVER_URL + '/monitor/upload';
  public uploader: FileUploader = new FileUploader({url: this.url});


  constructor() { }

  ngOnInit() {
  }

}
