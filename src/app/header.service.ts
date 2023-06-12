import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  // public notificationSubject = new Subject<string>();
  public notificationSubject = new BehaviorSubject<string>('Learning Rxjs');

  constructor() {}

  sendNotificatiion(data: string) {
    this.notificationSubject.next(data);
  }
}
