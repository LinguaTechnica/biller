import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  // TODO: ngIf will display if either visible.
  @Input() successMsg;
  @Input() errorMsg;
  @Input() warningMsg;

  constructor() { }

  ngOnInit() {
  }

}
