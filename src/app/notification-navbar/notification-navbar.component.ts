import { Component } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-notification-navbar',
  templateUrl: './notification-navbar.component.html',
  styleUrls: ['./notification-navbar.component.css']
})
export class NotificationNavbarComponent {
  notificationmsg : any;

  constructor (private notifications:HeaderService){

  }
  ngOnInit(){
    this.notifications.notificationSubject.subscribe(d =>{
      this.notificationmsg = d;
    })
  }
}
