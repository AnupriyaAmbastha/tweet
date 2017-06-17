import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserTimelineComponent } from './userTimeline.component';
import { LoggedUserComponent } from './loggedUser.component'

export const appRoutes: Routes = [
    { path: '', redirectTo: '/loggedUser', pathMatch: 'full' },
    { path: 'loggedUser', component: LoggedUserComponent },
    { path: 'timelineUser', component: UserTimelineComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
