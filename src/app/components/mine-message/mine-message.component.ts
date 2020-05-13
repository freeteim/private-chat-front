import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mine-message',
  templateUrl: './mine-message.component.html',
  styleUrls: ['./mine-message.component.css']
})
export class MineMessageComponent implements OnInit {

  @Input('access_info') access_info;

  constructor(
  ) { }

  ngOnInit() {
  }

}
