import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {


  constructor(private data: DataService) { }

  ngOnInit() {
  }

  setChatRoom( value: string) {
    DataService.theData.chatRoom = value;
  }
}
