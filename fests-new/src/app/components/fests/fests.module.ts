import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FestsRoutingModule } from './fests.routing.module';

import { CommentsModule } from '../comments/comments.module';

import { FestsService } from '../../core/services/fests.service';

import { FestsComponent } from './fests/fests.component';
import { FestComponent } from './fest/fest.component';
import { FestAddComponent } from './fest-add/fest-add.component';
import { FestEditComponent } from './fest-edit/fest-edit.component';
import { FestDeleteComponent } from './fest-delete/fest-delete.component';
import { FestReviewComponent } from './fest-review/fest-review.component';

@NgModule({
  imports: [
    CommonModule,
    CommentsModule,
    ReactiveFormsModule,
    FestsRoutingModule
  ],
  declarations: [
    FestComponent,
    FestAddComponent,
    FestsComponent,
    FestEditComponent,
    FestDeleteComponent,
    FestReviewComponent
  ],
  exports: [
    FestComponent,
  ],
  providers: [
    FestsService
  ]
})
export class FestsModule { }
