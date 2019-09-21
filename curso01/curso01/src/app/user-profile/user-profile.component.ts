import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface TimeInfo {
  timestamp: number;
  name: string;
  role?: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() name: string;
  @Input() role: string;
  @Output() logout = new EventEmitter<TimeInfo>();

  constructor() { }

  ngOnInit() {
  }
  clickEnLogout() {
    console.log('el usuario hizo click');

    this.logout.emit({ timestamp: Date.now(), name: this.name, role: this.role });
  }
}
