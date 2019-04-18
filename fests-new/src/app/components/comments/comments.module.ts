import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CommentsService } from '../../core/services/comments.service';

import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    CommentComponent, 
    CommentsComponent
  ],
  exports: [
    CommentsComponent
  ],
  providers: [
    CommentsService
  ]
})
export class CommentsModule { }
