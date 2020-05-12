import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AccessInfo } from '../models/access_info.model';

@Injectable({
  providedIn: 'root'
})
export class SocketAccessManagerService {

  socket = null;
  // _access_info = null;
  // set access_info(val) { this._access_info = val; }
  // get access_info() {
  //   return this._access_info;
  // }

  constructor() {
  }
  
  emit(access_info) {
    this.socket.emit('send', access_info);
  }

  connect(access_info: AccessInfo) {
    const observable = new Observable(observer => {
      this.socket = io(environment.socket_url);
      this.socket.on('join_room', message => {
        observer.next(message);
      });
      // this._access_info = access_info;
      this.socket.emit('join_room', access_info);
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getSocket() {
    return this.socket;
  }
}
