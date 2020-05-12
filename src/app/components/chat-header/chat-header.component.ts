import { Component, OnInit, Input } from '@angular/core';
import { AccessInfoStateService } from 'src/app/services/access-info-state.service';
import { AccessInfo } from 'src/app/models/access_info.model';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {


  name: string = '';

  access_info: AccessInfo = null;

  constructor(
    private accessInfoStateService: AccessInfoStateService
  ) { }

  ngOnInit() {
    const access_info = this.accessInfoStateService.access_info;
    this.setAccessInfo(access_info);
  }

  setAccessInfo(access_info: AccessInfo) {
    this.setName(access_info._name);
  }

  setName(name: string) {
    this.name = name;
  }
}
