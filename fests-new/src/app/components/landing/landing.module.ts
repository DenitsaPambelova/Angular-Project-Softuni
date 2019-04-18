import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeFestsComponent } from './home-fests/home-fests.component';
import { HomeFestComponent } from './home-fest/home-fest.component';
import { HomeCommentsComponent } from './home-comments/home-comments.component';
import { HomeCommentComponent } from './home-comment/home-comment.component';
import { BlockedComponent } from './blocked/blocked.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HomeFestsComponent,
    HomeFestComponent,
    HomeCommentsComponent,
    HomeCommentComponent,
    BlockedComponent,
    NotFoundComponent,

  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ]
})
export class LandingModule { }
