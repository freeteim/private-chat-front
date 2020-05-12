import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('access_info') access_info;

  constructor(
  ) { }

  ngOnInit() {
    console.log(this.access_info);
  }

}
