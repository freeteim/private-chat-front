import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketAccessManagerService } from 'src/app/services/socket-access-manager.service';
import { AccessInfo } from 'src/app/models/access_info.model';
import { AccessInfoStateService } from 'src/app/services/access-info-state.service';
import { MessageComponent } from '../message/message.component';

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

  message_list: Array<AccessInfo> = [];

  constructor(
    private socketAccessManagerService: SocketAccessManagerService,
    private accessInfoStateService: AccessInfoStateService
  ) { }

  ngOnInit() {
    this.socket = this.socketAccessManagerService.getSocket();
    this.socket.on('receive', (message) => {
      this.addMessage(message);
    });
  }

  ngAfterViewInit() {
    window.addEventListener('keydown', (e) => {
      if(e.keyCode === 13 && this.input_value != '') {
        this.emitMessage();
        setTimeout(() => {
          this.scrollBottom();
        }, 100);
      }
    });
  }

  addMessage(message) {

    const access_info = new AccessInfo(message);
    access_info.mine = access_info.equal(this.accessInfoStateService.access_info._name);

    // this.message_list.push(access_info);

    const li = document.createElement('li');
    let text = '';
    text += `[${message['_date']}] `;
    text += `${message['_name']} : `;
    text += message['_message'];
    li.innerText = text;
    this.messageBox.nativeElement.appendChild(li);
  }

  emitMessage() {
    const access_info: AccessInfo = new AccessInfo(this.accessInfoStateService.access_info);
    access_info.message = this.input_value;
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
