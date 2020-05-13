import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SocketAccessManagerService } from 'src/app/services/socket-access-manager.service';
import { AccessInfo } from 'src/app/models/access_info.model';
import { AccessInfoStateService } from 'src/app/services/access-info-state.service';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {

  access_id: string = '';
  name: string = '';

  isShow: boolean = true;
  @Output('outputShow') outputShow = new EventEmitter();

  constructor(
    private socketAccessManagerService: SocketAccessManagerService,
    private accessInfoStateService: AccessInfoStateService
  ) { }

  ngOnInit() {
  }

  onEnter($event) {
    if (this.access_id.length > 0 && this.name.length > 0) {
      this.onConnection();
    }
  }

  onAccessClick() {
    this.onConnection();
  }

  onConnection() {
    const access_info = new AccessInfo({
      _access_id: this.access_id, 
      _name: this.name
    });
    this.socketAccessManagerService.connect(access_info).subscribe((message: AccessInfo) => {
      this.outputShow.emit(true);
      this.accessInfoStateService.access_info = access_info;

      // ??? 님이 입장하셨습니다 기능
    });
  }
}
