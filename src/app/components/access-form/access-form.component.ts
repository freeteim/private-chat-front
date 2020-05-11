import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SocketAccessManagerService } from 'src/app/services/socket-access-manager.service';
import { AccessInfo } from 'src/app/models/access_info.model';

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
    private socketAccessManagerService: SocketAccessManagerService
  ) { }

  ngOnInit() {
  }

  onAccessClick() {
    
    this.onConnection();

  }

  onConnection() {
    const access_info = new AccessInfo(this.access_id, this.name);
    this.socketAccessManagerService.connect(access_info).subscribe(message => {
      this.outputShow.emit(true);
    });
  }
}
