import { Injectable } from '@angular/core';

import { Member } from './member';
import { MEMBERS } from './appData';
import { LOGGEDUSER } from './loggedUserData';
import { USERTIMELINE } from './userTimelineData';
@Injectable()
export class MemberService {

  getMembers(): Member[] {
    return MEMBERS;
  }

    getLoggedUser(): Member[] {
    return LOGGEDUSER;
  }
  getUserTimeline(): Member[]{
    return USERTIMELINE;
  }
}