import { Component } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './appData';
import { MemberService } from './app.service';
import { LOGGEDUSER } from './loggedUserData';
import { Router } from '@angular/router';



@Component({
  selector: 'logged-user',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [ MemberService],
})
export class LoggedUserComponent {

public memberDetails;
public targetValue;
public loggedUserData;
public tweetContent:any;
public timelineData;
public reverseMemberDetails;
public tweetCount = 4;

  constructor(
      private  memberService: MemberService,
      private router: Router
    ){}




ngOnInit(){
  
  this.tweetContent = '';
  this.memberDetails = this.memberService.getMembers();
  this.loggedUserData = this.memberService.getLoggedUser();
  this.timelineData = this.memberService.getUserTimeline();

}


imageClicked(){
    this.targetValue = 1
}

closeCompose(){
  this.targetValue = 0;
}

saveTweet()
{
  this.tweetCount = 0;
    var obj={
          "id" : this.loggedUserData[0].id,
          "userName" : this.loggedUserData[0].userName,
          "followers" : this.loggedUserData[0].followers,
          "content" : this.tweetContent ,
           "imgSrc" : this.loggedUserData[0].imgSrc,

      };

    this.memberDetails.push(obj);
    this.timelineData.push(obj);
    this.tweetContent = '';
    this.targetValue=0;
    this.memberDetails.reverse();
    this.tweetCountMethod();
}


navigateToViewMemberTimline(member){
sessionStorage.setItem('memberObj',JSON.stringify(member));
 this.router.navigate(['/timelineUser']);
}

tweetCountMethod(){
  for(let i=0;i<=this.timelineData.length;i++)
    {
      if(this.timelineData[i].id === this.loggedUserData[0].id)
      {
           this.tweetCount= this.tweetCount+1;
      }

    }
}


}
