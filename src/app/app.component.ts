import { Component } from '@angular/core';
import { Member } from './member';
import {MEMBERS} from './appData';
import {MemberService} from './app.service';
import { LOGGEDUSER } from './loggedUserData';
import { Router } from '@angular/router';
// import { UserTimelineComponent } from './UserTimelineComponent';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
      `,
  styleUrls: ['./app.component.css'] ,
  providers: [ MemberService],
})


export class AppComponent {

}
