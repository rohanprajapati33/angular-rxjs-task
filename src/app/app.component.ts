import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs';
  users:any;

  profileForm = new FormGroup({
    entermsg: new FormControl('', Validators.required),
  });
  currentmsg!: string;
  constructor(private notifications: HeaderService , private http:HttpClient) {}

  ngOnInit(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(res =>this.users = res)
  }
  
  // ngOnInit() {
  //   this.notifications.notificationSubject.subscribe((d) => {
  //     this.currentmsg = d;
  //   });
  // }
  sendMessage() {
    if (this.profileForm.invalid) {
      return;
    }

    const msg = this.profileForm.get('entermsg')!.value;
    this.notifications.sendNotificatiion(msg!);
  }
}
