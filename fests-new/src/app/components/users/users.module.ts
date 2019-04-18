import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users.routing.module';

import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFestsComponent } from './profile-fests/profile-fests.component';
import { ProfileFestComponent } from './profile-fest/profile-fest.component';
import { ProfileCommentsComponent } from './profile-comments/profile-comments.component';
import { ProfileCommentComponent } from './profile-comment/profile-comment.component';

import { UsersService } from '../../core/services/users.service';
import { UsersAllComponent } from './users-all/users-all.component';
import { UserShortComponent } from './user-short/user-short.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersAllComponent,
    UserShortComponent,
    UserEditComponent,
    ProfileComponent, 
    ProfileFestsComponent,
    ProfileFestComponent,
    ProfileCommentsComponent, 
    ProfileCommentComponent, UsersAllComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
