import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatHomeComponent } from './components/chat-home/chat-home.component';
import { AccessFormComponent } from './components/access-form/access-form.component';
import { SocketAccessManagerService } from './services/socket-access-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { MineMessageComponent } from './components/mine-message/mine-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatHomeComponent,
    AccessFormComponent,
    ChatHeaderComponent,
    MineMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SocketAccessManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
