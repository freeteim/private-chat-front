import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-message',
  templateUrl: './other-message.component.html',
  styleUrls: ['./other-message.component.css']
})
export class OtherMessageComponent implements OnInit {

  @Input('access_info') access_info;

  constructor() { }

  ngOnInit() {
    console.log(this.access_info);
  }

}
