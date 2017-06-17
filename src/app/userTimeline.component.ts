import { Component,Input } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './appData';
import { MemberService } from './app.service';
import { LOGGEDUSER } from './loggedUserData';
import { USERTIMELINE } from './userTimelineData';
@Component({
  selector: 'timeline-user',
  templateUrl: './userTimeline.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [ MemberService],
})

export class UserTimelineComponent {
  
public memberDetails;
public memberTimeline;
public targetValue;
public loggedUserData;
public tweetContent:any;
public memberObj:any;

constructor(
      private  memberService: MemberService
    ){}

ngOnInit(){
  this.tweetContent = '';
  this.memberDetails = this.memberService.getMembers();
  this.memberTimeline = this.memberService.getUserTimeline();
  this.memberTimeline.reverse();
  this.loggedUserData = this.memberService.getLoggedUser();
  this.memberObj = JSON.parse(sessionStorage.getItem('memberObj'));
}

navigateBack(event)
{
  window.history.back();
}

}
