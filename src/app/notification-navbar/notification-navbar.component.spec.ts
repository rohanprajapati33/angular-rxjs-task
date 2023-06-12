import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationNavbarComponent } from './notification-navbar.component';

describe('NotificationNavbarComponent', () => {
  let component: NotificationNavbarComponent;
  let fixture: ComponentFixture<NotificationNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationNavbarComponent]
    });
    fixture = TestBed.createComponent(NotificationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
