import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-chatter',
  templateUrl: './chatter.component.html',
  styleUrls: ['./chatter.component.css']
})
export class ChatterComponent implements OnInit {

  constructor(private data: DataService) { }
  message = '';

  ngOnInit() {
  }

  setMessage(value:string) {
    this.message = value;
  }

  sendChat() {
    this.data.sendMessage(this.message);
  }
}
