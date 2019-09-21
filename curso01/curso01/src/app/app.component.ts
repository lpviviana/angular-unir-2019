import { Component } from '@angular/core';
import { TimeInfo } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso01';
  user='Viviana';
  role="Admin";
  onLogout(evenInfo:TimeInfo):void{
    console.log('El usuario '+evenInfo.name + 'hizo logout a horas '+ evenInfo.timestamp);
  }
}
