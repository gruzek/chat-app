import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getMessages() {
    return DataService.theData.messages;
  }
}
