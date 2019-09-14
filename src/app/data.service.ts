import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
    providedIn: 'root'
  })

export class DataService {

  public static theData = {
    userName: '',
    chatRoom: 'No Chat Room',
    messages: []
  }

  constructor(private socket: Socket) { 

    this.createFakeMessages();

    socket.on('broadcastMessage', function(message) {
      DataService.theData.messages.push(message);
      console.log('received message: '+message.messageText);
    });
  }

  sendMessage(messageText: string) {
    var message = {
      date: '2019-09-14 08:28',
      userName: DataService.theData.userName,
      messageText: messageText
    };

    console.log('sending message '+messageText);
    this.socket.emit('sendMessage',message);
  }

  createFakeMessages() {
    DataService.theData.messages.push({
        date: '2019-09-14 08:28',
        userName: 'foobla',
        messageText: 'hello from foobla'
    });
  }
}