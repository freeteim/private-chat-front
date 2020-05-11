import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketAccessManagerService } from 'src/app/services/socket-access-manager.service';
import { AccessInfo } from 'src/app/models/access_info.model';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {

  input_value: string = '';
  socket = null;
  name: string = '';

  @ViewChild('messageBox') messageBox;
  @ViewChild('messageBoard') messageBoard;

  constructor(
    private socketAccessManagerService: SocketAccessManagerService
  ) { }

  ngOnInit() {
    this.socket = this.socketAccessManagerService.getSocket();
    this.socket.on('receive', (message) => {
      this.addMessageList(message);
    });
    this.name = this.socketAccessManagerService._access_info.name;
  }

  ngAfterViewInit() {
    window.addEventListener('keydown', (e) => {
      if(e.keyCode === 13 && this.input_value != '') {
        this.sendMessage();
        setTimeout(() => {
          this.scrollBottom();
        }, 100);
      }
    });
  }

  addMessageList(message) {
    const li = document.createElement('li');
    let text = '';
    text += `[${message['_date']}] `;
    text += `${message['_name']} : `;
    text += message['_message'];
    li.innerText = text;
    this.messageBox.nativeElement.appendChild(li);
  }

  parseDate() {
    const date = new Date();
    let text = '';
    text += date.getFullYear() + '.';
    text += ((date.getMonth() + 1) + '').padStart(2, '0') + '.';
    text += (date.getDate() + '').padStart(2, '0') + ' ';
    text += (date.getHours() + '').padStart(2, '0') + ':';
    text += (date.getMinutes() + '').padStart(2, '0');
    return text;
  }

  sendMessage() {

    const access_info: AccessInfo = this.socketAccessManagerService.access_info;
    access_info.message = this.input_value;
    access_info.date = this.parseDate();
    this.socketAccessManagerService.emit(access_info);
    this.clearTextBox();
  }

  clearTextBox() {
    this.input_value = '';
  }
  scrollBottom() {
    const el: HTMLDivElement = this.messageBoard.nativeElement;
    el.scrollTo(0, el.scrollHeight);
  }
}
