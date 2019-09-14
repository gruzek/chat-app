import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  //chatRoom = '';
  //userName = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  setChatRoom(value:string) {
    DataService.theData.chatRoom=value;
  }

  setUserName(value:string) {
    DataService.theData.userName=value;
  }
}
